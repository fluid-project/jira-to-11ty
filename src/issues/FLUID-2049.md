---json
{
  "title": "FLUID-2049",
  "summary": "\"Edit Appearance\" button only works the first time it is clicked",
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
  "date": "2009-01-05T11:14:30.000-0500",
  "updated": "2009-01-06T08:36:26.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2005/",
      "key": "FLUID-2005",
      "summary": "Only the top border and close button are visible when openning UI Options dialog: Using IE6"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-01-05T16:19:31.000-0500",
      "body": "The fix for <https://fluidproject.atlassian.net/browse/FLUID-2005#icft=FLUID-2005> caused this bug.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-01-05T16:33:59.000-0500",
      "body": "Looks good, I cant reproduce <https://fluidproject.atlassian.net/browse/FLUID-2005#icft=FLUID-2005> anymore either\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-06T08:36:26.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
"Edit Appearance" button only works the first time it is clickedFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)

Steps to reproduce:

1\) Open the sakai mock-up example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html>

2\) Click the "Edit Appearnce" button&#x20;

3\) Close the UI Options dialog

4\) Attempt to re-open the UI Options dialog by clicking on the "Edit Appearnce" button

Notice that it no longer opens

        