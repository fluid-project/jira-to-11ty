---json
{
  "title": "FLUID-2807",
  "summary": "No keyboard focus styling applied to open accordion panel title bars",
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
  "date": "2009-05-28T11:59:07.000-0400",
  "updated": "2011-03-04T15:44:17.124-0500",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE8 (Win XP)\\\nFF3, IE8 (Win Vista)\\\nIE7, FF4 (Win 7)\\\nFF4 (Mac OS 10.6)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:33:41.331-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-03-04T15:44:17.107-0500",
      "body": "This is no longer an issues because the new designs do not have an accordion.&#x20;\n"
    }
  ]
}
---
No keyboard focus styling applied to open accordion panel title bars

Steps to reproduce:

1\) Open the sakai mock-up example

2\) Open the UI Options Dialog

3\) Attempt to place focus on the title bar of the open accordion panel, using the keyboard

Notice that no focus styling appears

        