---json
{
  "title": "FLUID-3865",
  "summary": "Rich text inline edit demo does not contain focus styling for TinyMCE toolbar items",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jonathan Hung",
  "date": "2010-11-30T10:31:25.062-0500",
  "updated": "2014-07-18T09:36:23.346-0400",
  "versions": [
    "1.3",
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "Firefox 3.6, Windows, Mac OS X\\\nIE8 Windows 7\\\nIE6 Win XP&#x20;\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T13:28:54.409-0400",
      "body": "I think the issue is not so much that there isn't focus styling, it's that you can't properly tab to the toolbar: Try clickin in the toolbar area and then tabbing - you do get a focus highlight. Still a problem, but a different problem.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-18T09:36:23.296-0400",
      "body": "The focus styling appears. I've tried with Chrome 35, FF 30, Safari 7 (Mac OS 10.9) and IE 11 (Win 7).\n"
    }
  ]
}
---
Using FF 3.6, when focus is placed on the TinyMCE toolbar, it is invisible. Thus attempting to use keyboard navigation by tabbing through appears to be doing nothing, but in fact focus is being placed on toolbar items. The lack of focus styling is confusing and gives the wrong impression that the demo has broken.

To reproduce:\
1\. Start Firefox 3.6\
2\. Load the demo: <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/html/inlineEdit.html>\
3\. Begin editing the first paragraph.\
4\. While still editing, tab repeatedly through the document and attempt to reach the editor that is still open.\
5\. You will discover that you will be stuck on an invisible, empty element just before the editor.

Affects both FF 3.6 on Windows and Mac OS X. IE8 on Windows is not affected.

The example on the TinyMCE website does not appear to have this problem.\
<http://tinymce.moxiecode.com/examples/full.php#>

Keyboard work-around:\
You can hit "enter" to select an item in the toolbar. This would put you back into the textarea, from which you could tab out. You could also hit "esc", which would close the RichText Inline edit and give you back your proper tab navigation.

        