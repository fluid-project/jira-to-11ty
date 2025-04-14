---json
{
  "title": "FLUID-2307",
  "summary": "Renderer Test 5 has 3 failing tests: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-03-03T08:51:56.000-0500",
  "updated": "2009-03-20T16:03:07.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Renderer"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-12T12:47:11.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-03-17T17:08:02.000-0400",
      "body": "Fixed at revision 6767 - bug in parser/renderer\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-20T15:56:00.000-0400",
      "body": "I've reviewed this change, and it looks good to me.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-20T16:03:07.000-0400",
      "body": "Verified fix using:\n\nIE6, IE7 (Win XP)\\\nIE7 (Win Vista)\n"
    }
  ]
}
---
Renderer Test 5 has 3 failing tests

<http://build.fluidproject.org/fluid/tests/fluid-tests/Renderer-test.html>

        