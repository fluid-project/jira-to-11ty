---json
{
  "title": "FLUID-4194",
  "summary": "Remove experimental grade \"IoCRendererComponent\" by making it the default - allow downgrade via configuration",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-04-28T04:08:15.717-0400",
  "updated": "2014-03-03T13:10:46.225-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
As per IRC channel discussion today, we agreed to make the current grade "IoCRendererComponent" the default as "rendererComponent", and allow defeat of the "automatic upgrade of decorators" to IoC subcomponents via an option. This will be called "noUpgradeDecorators".

        