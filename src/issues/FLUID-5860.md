---json
{
  "title": "FLUID-5860",
  "summary": "Enactors test failing on Chrome 48",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Colin Clark",
  "reporter": "Giovanni Tirloni",
  "date": "2016-02-11T07:23:39.772-0500",
  "updated": "2024-07-22T09:28:50.817-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "UIEnhancer"
  ],
  "environment": "Fedora Linux 23\\\nChrome 48.0.2564.103\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5481/",
      "key": "FLUID-5481",
      "summary": "Preferences framework enactor tests fail if browser pane is zoomed in Chrome"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5860/infusion_linux_chrome48_enactors_results.txt",
      "filename": "infusion_linux_chrome48_enactors_results.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-02-11T13:06:54.843-0500",
      "body": "I couldn't reproduce this issue on Fedora 22\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-02-12T11:09:55.642-0500",
      "body": "This is a duplicate of <https://issues.fluidproject.org/browse/FLUID-5481>\n"
    }
  ]
}
---
Enactors test failing on Chrome 48.0.2564.103 running on Fedora Linux 23, both from /tests/framework-tests/preferences/html/Enactors-test.html and all-tests.html.

        