---json
{
  "title": "FLUID-2344",
  "summary": "Extra comma in DataBinding.js causes an error in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2009-03-13T09:30:00.000-0400",
  "updated": "2011-02-22T16:27:54.899-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Renderer"
  ],
  "environment": "IE 7 (Win Vista, Win XP)\\\nIE 6(Win XP, Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-13T09:37:11.000-0400",
      "body": "Removed trailing comma on line 242 or DataBinding.js\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:54.895-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Extra comma in DataBinding.js causes an error in IE

Steps to reproduce

1\) Open the Renderer unit tests\
<http://build.fluidproject.org/fluid/tests/fluid-tests/Renderer-test.html>

Notice that an error is thrown

Error: Expected identifier, string or number\
Line: 243\
File: DataBinding.js

        