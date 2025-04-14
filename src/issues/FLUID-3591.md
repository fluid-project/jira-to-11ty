---json
{
  "title": "FLUID-3591",
  "summary": "Fluid Renderer tests related to UI message fails: using IE 6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-04-01T16:22:35.000-0400",
  "updated": "2010-04-07T11:26:39.000-0400",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Renderer"
  ],
  "environment": "IE 6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3591/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-04-01T16:23:43.000-0400",
      "body": "screenshot-1 shows one of the failing unit tests\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-04-06T11:14:38.000-0400",
      "body": "IE6 doesn't appreciate raw text being added as an href target and attempts to fully qualify it with the current base URL on fetch. Text case fixed up to supply a valid protocol-based URL. Also improved slight ambiguity in assertNode messages which confused me for a while.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-04-06T12:04:16.000-0400",
      "body": "Tested, looks to be working now\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-07T11:26:39.000-0400",
      "body": "I've reviewed Antranig's changes to the Renderer tests at r9804 and they look good. +1 for inclusion in Infusion 1.2\n"
    }
  ]
}
---
Fluid Renderer tests related to UI message fails

Run the fluid parser unit tests\
<http://build.fluidproject.org/infusion/tests/framework-tests/renderer/html/Renderer-test.html>

Notice the failing tests

        