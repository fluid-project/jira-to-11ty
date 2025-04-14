---json
{
  "title": "FLUID-1785",
  "summary": "The border of the text field (in edit mode) does not display properly, in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-11-10T09:49:28.000-0500",
  "updated": "2008-11-14T09:05:37.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1785/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-11-10T09:50:47.000-0500",
      "body": "'screenshot-1' shows the inline edit field in edit mode, with the borders of the text field not displayed properly\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-14T09:05:37.000-0500",
      "body": "Appears to have been fixed at r6024\n\nVerified fix using:\n\nIE6 (Win XP)\\\nIE7 (Win Vista)\n"
    }
  ]
}
---
The border of the text field (in edit mode) does not display properly

Steps to reproduce:

1\) Open the bSpace example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Click on one of the inline edit fields to place it in edit mode

3\) Click again so that the caret appears

Notice that the borders of the text field are not properly displayed

        