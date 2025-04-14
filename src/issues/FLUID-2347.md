---json
{
  "title": "FLUID-2347",
  "summary": "The minimum text size does not reset",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-03-13T15:33:56.000-0400",
  "updated": "2009-03-20T10:14:01.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-17T11:12:33.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-19T16:11:56.000-0400",
      "body": "I reviewed the code and tested this fix. It looks good.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-20T10:14:01.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
The minimum text size does not reset

Steps to reproduce

1\) Open the UI Options example from the daily build site\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>

2\) Change the minimum text size and save the change

3\) Reset the changes and save

Notice that the text size does not return to the its initial size

        