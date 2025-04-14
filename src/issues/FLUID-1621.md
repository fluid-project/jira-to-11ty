---json
{
  "title": "FLUID-1621",
  "summary": "Editing large number of characters text with gaps for bspace inline edit creates a spacing issue.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Joseph Vernuccio",
  "date": "2008-09-25T15:55:39.000-0400",
  "updated": "2011-01-06T12:45:55.901-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1621/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-25T15:57:17.000-0400",
      "body": "screenshot-1 shows an example of the spacing/break that occurs after only editing inline edit field 3 with large separated characters.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-30T16:14:11.000-0400",
      "body": "This is likely caused by the other cells constricting and forcing their content to display on additional lines.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-06T12:45:55.898-0500",
      "body": "This demo has been removed and is likely a styling issue. Closing.\n"
    }
  ]
}
---
When editing separated text into the inline edit field number 3 only, the first field creates a spacing issue. This issue only seems to be present when you enter large number of characters with gaps into the third inline edit text field.&#x20;

Steps to reproduce:&#x20;

1\. Open URL: <http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\. Using the mouse, select the third (middle) inline edit text field.&#x20;

3\. Edit the text with a large number (e.g. 1000 characters) of characters with gaps between

4\. Using the mouse, select on black spot outside the editable text field.&#x20;

Results:&#x20;

* The first editable text field will now have a large gap in the field.&#x20;

        