---json
{
  "title": "FLUID-1338",
  "summary": "Springboards: inline edit field displayed at end of line when in edit mode",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-08-28T15:56:38.000-0400",
  "updated": "2011-01-14T09:53:23.984-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1338/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1338/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-28T15:57:45.000-0400",
      "body": "'screenshot-1' shows the inline edit field (in bold), not in edit mode. Notice its position in the line\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-28T15:58:47.000-0400",
      "body": "'screenshot-2' shows the inline edit field in edit mode. Notice it is now at the end of the line.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-10T08:57:49.000-0400",
      "body": "Appears to have been resolved with r5493\n\nVerified using:&#x20;\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
The inline edit fields in the Springboards example move to the end of the line when in edit mode. They move back to the correct location when out of edit mode.&#x20;

Steps to Reproduce:

1\) Open the inline edit springboard example from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/InlineEdit.html>

2\) Click on one of the inline edit fields from either example 1 or 3. Notice that the inline edit field moves to the end of the line

Note: The customized inline edit field does not have this issue.

dev-iteration42

        