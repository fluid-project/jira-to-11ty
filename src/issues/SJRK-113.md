---json
{
  "title": "SJRK-113",
  "summary": "Review and/or migrate multilingual UIO implementation",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Reopened",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2018-05-31T16:25:05.875-0400",
  "updated": "2018-07-26T15:25:18.813-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-151/",
      "key": "SJRK-151"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6198/",
      "key": "FLUID-6198"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6299/",
      "key": "FLUID-6299"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-06-14T15:59:38.350-0400",
      "body": "The user requirement is that the site has multiple languages, and the site author would like to add a panel to UIO so that site users can decide which language they would like to have the site in.\n\nThese are the technical details of the work:\n\n* We need a new panel, including an adjuster and an enactor\n  * Use the LetterSpacing files as an example to follow\n* We need a spot to hook into to set the language AND have it reload at that point\n* We need to save the user's chosen language (might be automagic)\n* We need to check the language when we're loading the page to make sure it's loaded in the preferred language initially. No FOUC\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-06-14T16:12:20.679-0400",
      "body": "Consider the prior art in the First Discovery tool (<https://github.com/GPII/first-discovery>) and the Preferences Editor ([https://docs.fluidproject.org/infusion/development/LocalizationInThePreferencesFramework.html#](https://docs.fluidproject.org/infusion/development/LocalizationInThePreferencesFramework.html))\n\nPerhaps Cindy Li can weigh in? 🙂\n\ncc Michelle D'Souza\n"
    },
    {
      "author": "Cindy Li",
      "date": "2018-06-19T11:33:01.116-0400",
      "body": "To re-capture the conversion that Greggor and I had today: yes, it's worthwhile to have a look at the implementation of the language panel in the first discovery tool, which also uses the preferences framework to render the panel and react to the language selection. Some of the code, such as the broadcasting of the selected language, probably can even be reused.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-07-17T12:57:41.553-0400",
      "body": "Not actually closed, resolution issue\n"
    }
  ]
}
---
We had to make some changes to UIO in order to get it to change language and re-render along with other ui elements without reloading the page, but these features should probably be part of UIO in general. They are also perhaps not the best smelling code.

in **storyTelling-page.js**, the functions sjrk.storyTelling.page.reloadUioMessages, sjrk.storyTelling.page.sjrk.storyTelling.page.updateUioPanelLanguages and their associated (injected) listeners on the page's uio component, as well as the other configuration of said component.

in **UIOMultilingualDemo.js**, the entire file. This is based on Alan's work in this repository: <https://github.com/waharnum/uio-multilingual>

        