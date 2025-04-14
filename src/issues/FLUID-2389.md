---json
{
  "title": "FLUID-2389",
  "summary": "Lower the maximum, minimum text size, so that the page is still usable and readable",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2009-03-20T12:40:38.000-0400",
  "updated": "2009-03-23T15:56:36.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-20T12:40:58.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-23T15:01:32.000-0400",
      "body": "I've reviewed this change. The actual change to the defaults is minor, and the resulting behaviour is definitely an improvement. +1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-23T15:56:36.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Lower the maximum, minimum text size, so that the page is still usable and readable

Currently, when the minimum text size is set to 200, it is no longer readable, nor usable. \
Somewhere from 30 - 40pt would likely be the maximum that it should currently be able to go.

Steps to reproduce:

1\) Open the sakai mock-up from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Open the UI Options dialog

3\) Change the font to the maximum size.

Notice that it is no longer usable nor readable

        