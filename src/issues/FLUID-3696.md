---json
{
  "title": "FLUID-3696",
  "summary": "Release 1.1.3: Update all versioning number to 1.1.3 ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Harris Wong",
  "date": "2010-08-30T12:14:24.173-0400",
  "updated": "2011-01-14T10:37:18.713-0500",
  "versions": [],
  "fixVersions": [
    "1.1.3"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3696/FLUID-3696.patch.txt",
      "filename": "FLUID-3696.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2010-08-31T11:12:13.617-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3696#icft=FLUID-3696>.patch.txt updates all version number from 1.1.2 to 1.1.3.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-09-02T14:00:15.859-0400",
      "body": "Committed Harris' patch which updated all the version numbers to 1.1.3\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T10:30:20.279-0500",
      "body": "Reopening these issues so I can add the release component to them.&#x20;\n"
    }
  ]
}
---
Update the version number to 1.1.3 in the following files:

build-scripts/build.properties\
src/webapp/framework/core/js/Fluid.js\
project.xml\
pom.xml\
README.txt

        