---json
{
  "title": "FLUID-1322",
  "summary": "The undo/redo icons are not in the correct tab order",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-08-27T11:37:03.000-0400",
  "updated": "2008-09-25T11:14:58.000-0400",
  "versions": [
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1329/",
      "key": "FLUID-1329",
      "summary": "inline edit - undo/redo  do not receive focus"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1317/",
      "key": "FLUID-1317"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-19T11:58:38.000-0400",
      "body": "Appears to be fixed now that the undo/redo are links\n\nVerified using:\\\nFF2, FF3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-25T09:02:09.000-0400",
      "body": "Now that the icon is back the undo/redo button is no longer in the correct tab order.&#x20;\n\nThis could be because it is prepended instead of appended\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-25T09:02:37.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-25T10:14:33.000-0400",
      "body": "Used append() instead of prepend(), removed CSS-P data\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-25T11:14:15.000-0400",
      "body": "Reviewed and suggested some cleanup. Jacob did the cleanup and I reviewed that as well. Good fix. 🙂\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-25T11:14:58.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
The undo/redo icons are not in the correct tab order.&#x20;

After editting a text field you have to shift-tab to get to the undo icon.

(based on the bSpace example from the daily build site. <http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>)

dev-iteration43

        