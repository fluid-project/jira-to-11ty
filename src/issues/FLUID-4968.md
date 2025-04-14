---json
{
  "title": "FLUID-4968",
  "summary": "Hide presentational content from screen readers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "heidi valles",
  "date": "2013-04-02T09:33:12.855-0400",
  "updated": "2015-07-30T16:57:09.799-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5680/",
      "key": "FLUID-5680"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4968/Screen Shot 2013-04-02 at 11.23.01 AM.png",
      "filename": "Screen Shot 2013-04-02 at 11.23.01 AM.png"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2013-04-02T11:29:33.680-0400",
      "body": "via Joseph re: role=\"presentation\" :\n\nBrowsers create an accessibility tree whose nodes, called \"accessibles\", contain information for ATs to use.  Marking an element with role=\"presentation\" means no accessible is created in the a11y tree for that element.  However, the content of the element is in the tree (as you noted in the jira).  Another quick way to put it is that role=\"presentation\" eliminates the element from the a11y tree.  The Authoring Practices Guide shows some examples:\\\n<http://www.w3.org/WAI/PF/aria-practices/Overview.html#presentation_role>.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2013-04-03T15:45:44.881-0400",
      "body": "Arash and I will begin investigating the pros and cons of icon fonts and hopefully come to an understanding whether or not this is an approach feasible for our components.\n"
    },
    {
      "author": "Arash Sadr",
      "date": "2013-04-04T10:44:31.201-0400",
      "body": "Here are two links showing \"How to hide any element from page only from Screenreader but not from the page\"\\\n<http://stackoverflow.com/questions/4796752/how-to-hide-any-element-from-page-only-from-screenreader-but-not-from-page-for-n>\\\n<http://a11yproject.com/posts/how-to-hide-content/>\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2013-04-04T16:05:21.134-0400",
      "body": "A problem here is that this is a **label** for the control with id 'themeRow::themeInput'.  That entails that the accessible with id 'themeRow::themeInput' will have an accessible name of \"A Default\", since that's what is specified in the \\<label> element.  And, that explains why screen readers are reading the \"A\".\n\nI take it that it's not desirable to have the \"A\" as part of the accessible name.  Then why is it part of the \\<label>?  Put another way:  Is \"A\" logically part of the name of the control?\n\nAlso, I'd have a better feel for what is going here if I knew what kind of control \"themeRow::themeInput\" is.  Based on the screen shot, the right side (with the various \"a\"s) has the text \"colour and contrast\", and that looks like the appropriate label and/or accessible name.  Then again, I don't know the context, so I may be way off.  What is being labelled? What would be meaningful in terms of labelling it?\n\nYou might also consider using \"aria-label\" as an attribute of the control itself, and setting it to what you want the name to be.  Text within aria-label is not rendered on screen. For example:\\\n\\<element id=\"themeRow::themeInput\" aria-label=\"Default\" ...>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-04-05T09:01:16.103-0400",
      "body": "Joseph they are actually radio buttons. They are styled in such a way so as to hide the actual input and allow the user to only interact with the Label instead. I'm not sure how long this link will be active for, but this is an early release of a working example.\\\n<http://demo.floeproject.org/integration-demos/uiOptions/ClimateChange.html>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-04-08T14:38:23.375-0400",
      "body": "I added a comment to <https://fluidproject.atlassian.net/browse/FLUID-4934#icft=FLUID-4934> that might be relevant here:\\\n<http://issues.fluidproject.org/browse/FLUID-4934?focusedCommentId=23535&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-23535>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T10:02:08.181-0400",
      "body": "I believe the typical approach these days would be to use aria-hidden=\"true\".\n"
    },
    {
      "author": "Kaye Mao",
      "date": "2015-07-30T16:57:09.775-0400",
      "body": "Reading of A has been fixed by <https://issues.fluidproject.org/browse/FLUID-4977>\n\nIcon content is duplicated by <https://issues.fluidproject.org/browse/FLUID-5680>\n"
    }
  ]
}
---
There are some presentational elements within UI Options that we would like to hide/prevent being read out by screen readers/AT. Specifically, the ligatures of the header icons, and the 'a's within the contrast radio control.&#x20;

Marking these elements with role="presentation" is not the correct solution as this does not hide content, but the inherent role of an element. For example, if added to a header element, the content would still be read out, but it's header-ness wouldn't be mentioned.

Perhaps for certain icons, we wouldn't use ligatures (is that possible to do? Have ligatures for some but not all of the icons within a font?). Still, the icon content would likely be read by AT. Need to research a way of marking some content "don't read this."

Ex. markup for contrast theme choice, where we want the 'A' to not be read:

\<label id="themeRow::themeLabel" class="flc-uiOptions-themeLabel fl-theme-uio-bw uio-demo-theme" for="themeRow::themeInput">\
\<span class="fl-preview-A">A\</span>\
\<span class="fl-hidden-accessible">Default\</span>\
\</label>

        