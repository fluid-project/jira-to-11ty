---json
{
  "title": "FLUID-4140",
  "summary": "Make UI Options' preview a separate component so that it can be used optionally.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2011-03-10T18:35:21.906-0500",
  "updated": "2013-10-04T10:04:57.126-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.1.3",
    "1.2beta1",
    "1.2",
    "1.2.1",
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-04-01T12:51:55.182-0400",
      "body": "Merged into project repository master at commit 38d0d93bb98bd17a7dc8b741d3606933f57080b1\n"
    }
  ]
}
---
At the moment, the preview pane in UI Options is a hard-baked feature of the component. It can't be turned on or off, and it isn't an optional subcomponent. The new wireframes for UI Options in Infusion 1.4 involve making the preview optional.

We should factor it as a standard subcomponent of UI Options resolved through IoC.

        