---json
{
  "title": "FLUID-2898",
  "summary": "Release 1.1: Before the trunk is reopened, increment and add -SNAPSHOT the build files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-06-02T17:29:09.000-0400",
  "updated": "2011-01-14T10:37:19.051-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T10:30:23.317-0500",
      "body": "Reopening these issues so I can add the release component to them.&#x20;\n"
    }
  ]
}
---
Modify the version of the maven and ant project files (pom.xml, project.xml and build-scripts/build.properties) on trunk to reflect that trunk development is now a snapshot of the next release version. For example:

\<version>0.2-SNAPSHOT\</version>

1.1-release-process&#x20;

        