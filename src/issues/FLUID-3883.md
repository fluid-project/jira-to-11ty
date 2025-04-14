---json
{
  "title": "FLUID-3883",
  "summary": "Rename \"fluid.get/setBeanValue()\" to \"fluid.get/setValue()\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-08T16:22:45.429-0500",
  "updated": "2010-12-10T16:15:01.998-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
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
      "date": "2010-12-10T16:11:48.370-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-10T16:15:01.992-0500",
      "body": "Global rename is committed for release 1.3. Following a fuller vote in the IRC channel on the subsequent day, 9/12/2010, we decided in favour of fluid.get/fluid.set rather than the slightly longer names. We will plan to support the historical names fluid.model.getBeanValue etc. for a substantial number of releases, possibly until 2.0 since there may be a wide body of client code expecting them.\n"
    }
  ]
}
---
We decided in the channel on Dec. 8, 2010 to rename the framework functions fluid.getBeanValue() and fluid.setBeanValue() to fluid.getValue() and fluid.setValue() respectively. We will keep fluid.getBeanValue() and fluid.setBeanValue() for backward compatibility, but they will be deprecated for quite some time. The deprecation should be noted clearly both in the code and in the documentation.

<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2010-12-08> starting at 4:09pm (15:09:30 CST)

        