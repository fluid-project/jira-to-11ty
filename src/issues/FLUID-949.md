---json
{
  "title": "FLUID-949",
  "summary": "Can highlight 2 inline edit fields, by using the mouse and keyboard",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-07-21T13:17:44.000-0400",
  "updated": "2008-07-21T19:05:18.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-949/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-21T14:18:52.000-0400",
      "body": "'screenshot-1' shows the two highlighted fields and the mouse hover message\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-07-21T19:05:18.000-0400",
      "body": "Daphne and I don't believe this is a bug. You don't often have the ability to \"point\" to two things at once, but since it is possible in this instance, and because both mousing over and tabbing to inline editable elements should highlight them, we feel it is OK for two elements to be highlighted at once. We don't think you should be able to **edit** two at once, but I tested and the system is not allowing this so we are closing this bug.&#x20;\n"
    }
  ]
}
---
When tabbing to inline edit fields ( simple text ), the inline edit field is highlighted in yellow. If you mouseover, another inline edit field there will now be two fields with yellow highlights.

Quoted from Fluid-891

Antranig Basman - 18/Jul/08 05:45 PM\
This is resolved at revision 5239 - however, note that the highlight semantics can now appear "unusual" in the case where the user tabs focus to one control using the keyboard, and then hovers over a different one with the mouse. This can lead to either 2 or zero "invitation style" edit controls in the document.&#x20;

Steps to Reproduce:

1\) Open the inline edit example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Using the keyboard tab to one of the inline edit fields. Notice the yellow highlight

3\) Using the mouse, hover over a different inline edit field. Notice that there are now 2 highlighted inline edit fields

        