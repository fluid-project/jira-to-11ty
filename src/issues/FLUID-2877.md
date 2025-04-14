---json
{
  "title": "FLUID-2877",
  "summary": "Release 1.1: Before the trunk is reopened, restore fluid.fail()",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-06-01T13:15:29.000-0400",
  "updated": "2011-02-28T16:45:18.592-0500",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2874/",
      "key": "FLUID-2874",
      "summary": "Release 1.1: Tag, package and post the release"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-06-02T17:24:25.000-0400",
      "body": "Uncommented line 33 of Fluid.js&#x20;\n\nmessage.fail(); // Intentionally cause a browser error by invoking a nonexistent function.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:18.587-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
Before the trunk is reopened, restore fluid.fail()

comment out:\
line 32: throw new Error(message);

and uncomment: \
//message.fail(); // Intentionally cause a browser error by invoking a nonexistent function.

1.1-release-process

        