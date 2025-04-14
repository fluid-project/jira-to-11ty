---json
{
  "title": "FLUID-2335",
  "summary": "Accordion throws an error when trying to switch sections: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-03-12T09:07:36.000-0400",
  "updated": "2011-02-22T16:27:49.589-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)&#x20;\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-12T10:48:45.000-0400",
      "body": "In IE you need to specify a border for the content sections of the accordion. jQuery UI does this by adding classes in the js file. Since we do not import those classes, we had to add it manually.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-12T10:49:23.000-0400",
      "body": "Please verify and close if fixed\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:49.587-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Accordion throws an when trying to switch sections: using IE

This began to happen after upgrading to jQuery UI 1.7

Error: Invalid Arguement\
Line: 1048\
File: jquery-1.3.1.js

        