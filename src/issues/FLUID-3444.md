---json
{
  "title": "FLUID-3444",
  "summary": "php tests can be combined",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-12-17T12:42:27.000-0500",
  "updated": "2013-04-11T17:43:18.452-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3444/FLUID-3444-1.patch.txt",
      "filename": "FLUID-3444-1.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2010-01-18T10:53:09.000-0500",
      "body": "FLUID-3444-1.patch.txt adds a test suite to the php tests which can run all the tests at once. Small modifications were made to the individual test files to remove the test running code.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-01-18T10:55:36.000-0500",
      "body": "Patch attached should resolve this issue\n"
    }
  ]
}
---
Currently we need to visit four different URLS to run the php tests. It would be easier for the testing process if we only had to visit one URL and that ran all the tests. Investigate simpletest further and see if this is possible and if so, make the changes. <http://www.simpletest.org/>

        