---json
{
  "title": "FLUID-2365",
  "summary": "Table of contents not working in Sakai mock-up",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2009-03-17T12:14:53.000-0400",
  "updated": "2009-03-20T14:47:11.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2339/",
      "key": "FLUID-2339",
      "summary": "Toggling Table of Contents on, throws an error: using IE"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-17T12:15:27.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-19T12:04:48.000-0400",
      "body": "Changing the path to the template fixed the issue. I reviewed Jacob's commit and it looks good.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-20T14:47:11.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.6 (Win XP)\n"
    }
  ]
}
---
Table of contents not working in Sakai mock-up

Steps to reproduce:

1\) Open the sakai mock-up from the daily build site

2\) Open the UI Options dialog

3\) Under the "Easier to find" header turn the table of contents on

4\) Save and apply the changes

Notice that the table of contents isn't displayed

        