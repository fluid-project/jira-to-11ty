---json
{
  "title": "FLUID-4740",
  "summary": "Remove support for building Java WAR packages of Infusion with Maven",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "Colin Clark",
  "date": "2012-08-08T11:53:47.929-0400",
  "updated": "2013-07-31T10:48:24.122-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5106/",
      "key": "FLUID-5106"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-07-30T16:05:17.017-0400",
      "body": "This work has been completed at <https://github.com/fluid-project/infusion/commit/b7b62dcb0816d6bb65e2215eafc5cfab4872cae1>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-07-30T16:06:21.146-0400",
      "body": "Commit <https://github.com/fluid-project/infusion/commit/5b6ad2f3bd832d732e4d1df4183d1c1d7d8355c7> has reintroduced the webapp directory.&#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2013-07-30T16:37:18.668-0400",
      "body": "<https://github.com/fluid-project/infusion/pull/377>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-07-31T08:45:15.541-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/377> ) into the project repo at 937b8f4283f6dc1910e6c8a9474d57a2b5ec4d27\n"
    }
  ]
}
---
Since its inception, Infusion's build system has produced WAR file packages for Java applications. The original intention of this feature was to make it easy for Java developers to drop Infusion into their container or explode it into their app in a modular way.

In practice, few if any users needed the feature, and it presents significant complexity to our build system. Since we're on the cusp of moving to a Node.js-based build system, it's time to retire this feature from the code base.

        