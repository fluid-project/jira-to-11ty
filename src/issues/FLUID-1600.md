---json
{
  "title": "FLUID-1600",
  "summary": "Pressing the \"Tab\" key to exit edit mode, places focus on the wrong item",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2008-09-22T10:47:28.000-0400",
  "updated": "2016-11-15T09:11:26.465-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1.1",
    "1.2",
    "1.2.1",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3 (Mac OS 10.5)\\\nSafari 5 (Mac OS 10.6)\\\nFF4 (Mac OS 10.6)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2023/",
      "key": "FLUID-2023"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:50:54.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-03T14:07:28.000-0500",
      "body": "I am not sure this will be easy to resolve at all. The default browser behaviour appears to be to compute the next tab control at the point of event handling. Creating or removing an element with tabindex in the oncoming focus path does not make the browser change its mind. Therefore it would seem extremely hard to encourage the browser to tab to a control that is not visible at the time the key is pressed.&#x20;\n\nThe only way out I can think of, is to hijack the processing of tab order 100% - to have a model of the document separate from the static tabindex/control order which is delegated to when tab is pressed on an \"owned\" component. This would be quite expensive, as it would require perpetual DOM scans, but it might promise to resolve not only this issue, but a number of other portability concerns such as <https://fluidproject.atlassian.net/browse/FLUID-861#icft=FLUID-861>. It seems a somewhat drastic step though.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-04T13:31:30.000-0500",
      "body": "design-watched\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-12-20T16:31:42.793-0500",
      "body": "This happens the first time there is an edit.  If you Shift+Tab back to the edit field, edit again, press tab, it does go to the undo/redo.\n"
    }
  ]
}
---
Pressing the "Tab" key to exit edit mode, places focus on the wrong item

Steps to reproduce:

1\) Open the Simple Text Inline Edit example from the daily build site:\
<http://build.fluidproject.org/infusion/demos/inlineEdit/simple/html/inlineEdit.html>

2\) Open first inline edit field - the Title - and change the value

3\) Using the keyboad press the "Tab" key to exit edit mode

Notice that focus isn't placed on the "Undo" link but on the next tabbable item - in this case, the caption field.

        