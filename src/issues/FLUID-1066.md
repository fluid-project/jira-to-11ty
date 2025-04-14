---json
{
  "title": "FLUID-1066",
  "summary": "Entering a long string of text inside an inline edit field causes the hover message to change size",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-07-29T13:44:28.000-0400",
  "updated": "2009-06-04T11:41:32.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nFF3 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1066/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1066/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-29T13:45:08.000-0400",
      "body": "'screenshot-1' shows how the hover message should appear\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-29T13:46:27.000-0400",
      "body": "'screenshot-2' shows how the hover text appears when a long string of text is entered into the inline edit field. The pointer was over the right end of the 'g'.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-08-05T20:05:43.000-0400",
      "body": "Assigned to Uploader component by accident; changed to Inline Edit\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-04T11:41:32.000-0400",
      "body": "Appears to have been fixed with one of the changes to inline edit since the last release\n\nTested using:\\\nFF3, Opera 9.6 (Mac OS 10.5)\n"
    }
  ]
}
---
Entering a long string of text inside an inline edit field causes the hover message to change size.&#x20;

Steps to reproduce:

1\) Open the inline edit demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Edit one of the inline edit felds with a long string of text (e.g. "pppppppppp111111111111122222222222222333333333333333444444444444555555555556666666666abcdefg")

3\) Save the change, by pressing the 'enter' key. Hover the mouse over the end of the inline edit field. Notice that the hover message is on more than one line.

The inline edit field may be housed in a table, in this example. The portion of the inline edit field may be override another table cell and the hover message may be picking up the size constraints from that field.

        