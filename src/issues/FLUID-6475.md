---json
{
  "title": "FLUID-6475",
  "summary": "Update infusion-nexus-client to use Nexus 0.3.0",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Simon Bates",
  "date": "2020-03-11T12:02:01.304-0400",
  "updated": "2024-07-22T10:35:33.596-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2020-03-17T13:02:06.301-0400",
      "body": "Antranig has created a pull request:\n\n<https://github.com/fluid-project/infusion-nexus-client/pull/2>\n"
    }
  ]
}
---
This is perhaps a task to tackle after FLUID-6465, but I wanted to ensure that the work is captured.

Until we update to Nexus 0.3.0, `infusion-nexus-client` will depend on Nexus 0.2.0, which contains the `gpii.nexus...` naming.

        