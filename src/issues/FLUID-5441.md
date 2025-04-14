---json
{
  "title": "FLUID-5441",
  "summary": "the script test in the renderer components manual test doesn't trigger the alert",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2014-06-13T12:57:41.786-0400",
  "updated": "2015-06-16T11:52:51.082-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": "Safari 7 (Mac OS 10.9.3)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-16T11:52:51.080-0400",
      "body": "This manual test has been removed.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the renderer components manual test\
<http://172.16.2.184:8888/git/infusion/src/tests/manual-tests/html/renderer-component-types.html>

Notice that an alert isn't triggered on the page (should happen on page load.

        