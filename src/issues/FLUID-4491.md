---json
{
  "title": "FLUID-4491",
  "summary": "Line spacing doesn't affect elements that have a line-height style set",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2011-10-03T12:36:01.744-0400",
  "updated": "2022-02-03T10:21:30.865-0500",
  "versions": [
    "1.4",
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4499/",
      "key": "FLUID-4499",
      "summary": "Modifying linespacing doesn't change the spacing in the textarea of the demo"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6167/",
      "key": "FLUID-6167"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-10-05T10:26:45.318-0400",
      "body": "spoke with james in the channel today, he said all the line height should multiply. Including the ones that had been set by an integrator ahead of time.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-07-06T16:48:31.643-0400",
      "body": "This is going to require some javascript intervention. We will likely need implementors to provide a map of selectors and line-heights so that we can set line height appropriately when a user changes it. The alternative is walk the entire DOM, determine line-height and build our own map which would be very expensive.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-04-03T13:26:25.205-0400",
      "body": "The reason why the line spacing enactor doesn't work when a line-height is already set on an element is because of how the CSS styles are applied for the line-height rule. The enactor sets the line-height on the body. However, unlike sizes set in em values (e.g. fontsize), this value isn't used as a base for multiplying subsequent values by. Instead, each time line-height is set, it is setting a specific line-height for that element and anything that inherits it. This is similar to setting fontsize with pixel values everywhere.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2018-07-24T16:29:04.500-0400",
      "body": "Justin Obara\n\nA way to address this would be to apply a line height specific class to the body whenever the line height adjuster is applied. For example \"fl-uio-lineheight-12\"  can be applied to the body element for when line height is set to 1.2x.\n\nThis way it is possible to style against a specific line height using specific CSS rules.\n\n \n\nEdit: I guess that is what Michelle D'Souza was saying above.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2018-07-24T16:41:50.729-0400",
      "body": "I was thinking that in general, every UIO adjuster should apply a unique classname to the body element so site implementors can customize the appearance.\n"
    },
    {
      "author": "Sean F @ opin",
      "date": "2020-12-15T20:27:27.685-0500",
      "body": "Hi. I ran into this problem and implemented a rather brute-ish but working solution, that is extendable. \n\n \n\nI set up an event listener for when line-height is not 1, and when its not one...\n\n \n\n```java\nfunction removeLineHeights() {\r\n    for (var sheet of document.styleSheets) {\r\n    try {\r\n      // external stylesheet throw an exception on deref here\r\n      sheet.cssRules;\r\n      for (var rule of sheet.cssRules) {\r\n          if (rule.style && \"line-height\" in rule.style) {\r\n            if (rule.style['line-height'] > 0) {\r\n              rule.style.removeProperty('line-height');\r\n            }\r\n          }\r\n        }        } catch(e) {\r\n          void 0;\r\n      }\r\n    }\r\n  }\r\n}\n```\n\n \n\nthis function goes through every single stylesheet thats attached and removes the line-height style that is declared.  This allows the line height on body to work.  Of course, this remove relative line height differences and 'visual rhythm' but seeing as thats kind of this tools point, I think its a justifiable solution to make this excellent plug-in just work. &#x20;\n\nthe try catch is needed because external style sheets will throw an access denied exception error.\n\nI am doing this to make a client's website more accessible and only had a chance to scratch the surface of this library but I look forward into using it more in the future and hopefully contributing.  This is event handler I used, basically checks if line height is 1, and if its not runs the removeLineHeights function.  I couldn't figure out how to get the button event using this frameworks native API so, yes this is a hack on top of the DOM =]\n\n \n\n```java\nfunction lineHeightChange() {\r\n      var prefIFrame = document.querySelector('.fl-prefsEditor-separatedPanel-iframe');\r\n      if (prefIFrame) {\r\n        var lineSpaceEle = prefIFrame.contentDocument.querySelector('.flc-prefsEditor-line-space');\r\n        if (lineSpaceEle) {\r\n          var lineHeightEle = lineSpaceEle.querySelector('input.flc-textfieldStepper-field');\r\n          if (parseFloat(lineHeightEle.value) != 1 && !window.lineHeightsRemoved) {\r\n            removeLineHeights();\r\n            window.lineHeightsRemoved = true;\r\n          } else if (parseFloat(lineHeightEle.value) == 1 && window.lineHeightsRemoved) {\r\n            for (var node of document.querySelectorAll('link')) {\r\n              if (node.rel==\"stylesheet\") {\r\n                node.href= node.href + \"refresh\";\r\n              }\r\n            }\r\n            window.lineHeightsRemoved = false;\r\n          }\r\n        }\r\n      }\r\n    }\n```\n\nThe other part of the function, which happens right now when the line height is exactly one, is triggering a CSS refresh, which will bring back the CSS styles deleted from JS.  this could be done in a much better way, namely adding them back, or creating a temporary Stylesheet with those values when they are removed, and then just re-attaching that.  I am going to remove this from the line-height check and put it on the reset button, but it still does cause a jarring flash of unstyled content.\n\n \n\n \n\nwell anyways just wanted to share this with you guys because i appreciate the framework and how built out it is (love custom events!), its nice JS, and I'm also a big supporter of accessibility in general.\n\nThis post helped me figure out what the problem was (the website had unitless line heights and this framework just adjust body's), but not a workable solution, especially since the site I am tasked with improving the accessibilty on has on the order of 1000s of line height properties.  First I was going to use a PostCSS plug-in, which allowed me to use the text size plug-in on this site with an entirely pixel based CSS codebase.  Off topic to this issue, but PostCSS plug-ins would be a good resource to explore and document to make legacy codebases work with infusion.\n\n \n\nThanks everyone =]\n\n \n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-01-28T15:26:37.955-0500",
      "body": "Sean F @ opin thanks for writing this up. We appreciate the feedback and suggestions. Sorry for the late reply, I've just come across this now while looking for a reference to this issue. It's probably not in scope for our work at the moment, but something that we'll keep in mind when we have a chance to address this issue. \n\nThanks also for the suggestion of [PostCSS](https://postcss.org). It's been our radar for things to explore more.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-02-03T10:21:30.859-0500",
      "body": "This has been addressed in work on <https://fluidproject.atlassian.net/browse/FLUID-6260#icft=FLUID-6260>. There is now the option to use CSS Custom Properties to access the setting. This can be used from integrations to apply line-height adjustments to elements that had explicitly styled the line-height. For example:\n\n```java\n.my-element {\r\n    line-height: var(--fl-lineSpace); \r\n}\r\n\r\n.my-element-scaled-line-height {\r\n    line-height: calc(var(--fl-lineSpace-factor, 1) * 1.3);\r\n}\n```\n\nSee:\n\n<https://github.com/fluid-project/infusion/blob/0b24a595780b19f7367eb42e254964e77555e1a0/src/framework/preferences/css/sass/README.md>\n"
    }
  ]
}
---
In our demos, the class "tagline" has set line-height: 130%. UIO's line spacing setting doesn't affect this paragraph. It should work like font-size and resize relative to the initial setting, but doesn't. Not sure how to fix it.

See <http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptionsFullWithPreview.html>

        