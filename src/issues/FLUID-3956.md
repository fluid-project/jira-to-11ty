---json
{
  "title": "FLUID-3956",
  "summary": "The unit tests related to FLUID-3658 are failing: IE9",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2010-12-18T13:28:03.700-0500",
  "updated": "2014-04-02T15:44:02.512-0400",
  "versions": [
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": "IE9 (Win7)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4079/",
      "key": "FLUID-4079"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3956/Screen shot.png",
      "filename": "Screen shot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-18T13:29:36.343-0500",
      "body": "\"Screen shot\" shows the failing unit test\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-04-02T15:44:02.509-0400",
      "body": "This is no longer failing.\n"
    }
  ]
}
---
The unit tests related to FLUID-3658 are failing.

Steps to reproduce:

1\) Run the RendererUtilities tests, Notice the failing unit tests\
<http://build.fluidproject.org/infusion/tests/framework-tests/renderer/html/RendererUtilities-test.html>

        