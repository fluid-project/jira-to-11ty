---json
{
  "title": "FLUID-3363",
  "summary": "Release 1.1.2: Before the trunk is reopened, restore fluid.fail()",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Eli Cochran",
  "date": "2009-11-05T15:41:34.000-0500",
  "updated": "2010-03-23T11:33:45.000-0400",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-03-23T11:33:45.000-0400",
      "body": "It appears that this has been performed on trunk already.\n"
    }
  ]
}
---
Before the trunk is reopened, restore fluid.fail()

comment out:\
line 32: throw new Error(message);

and uncomment: \
//message.fail(); // Intentionally cause a browser error by invoking a nonexistent function.

1.2-release-process

        