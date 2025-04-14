---json
{
  "title": "FLUID-2177",
  "summary": "Table of Contents unit tests fail in IE",
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
  "date": "2009-01-30T08:56:04.000-0500",
  "updated": "2009-02-10T08:26:00.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE 6, IE 7 (Win XP)\\\nIE 7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-10T08:25:59.000-0500",
      "body": "verified fix using:\n\nIE 6 (Win XP)\\\nIE 7 (Win Vista)&#x20;\n"
    }
  ]
}
---
Table of Contents unit tests fail in IE

<http://build.fluidproject.org/fluid/tests/fluid-tests/TableOfContents-test.html>

It appears that it is a problem with the href

        