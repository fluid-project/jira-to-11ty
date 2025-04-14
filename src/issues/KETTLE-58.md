---json
{
  "title": "KETTLE-58",
  "summary": "Cut a dev release with the \"root safe dedupe\" version of infusion...",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-04-18T03:02:23.814-0400",
  "updated": "2017-05-04T18:49:03.663-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-04-18T03:06:17.944-0400",
      "body": "<https://github.com/fluid-project/kettle/pull/32>\n"
    }
  ]
}
---
In <https://fluidproject.atlassian.net/browse/FLUID-6149#icft=FLUID-6149>, a fix was introduced to allow fluid.require to work in repositories housed in the root of a filesystem.  Mixing this version with older versions results in dedupe warnings.

This ticket covers cutting a dev release of kettle that uses the new (dev) release of infusion, for packages requiring both the <https://fluidproject.atlassian.net/browse/FLUID-6149#icft=FLUID-6149> fix and kettle.

        