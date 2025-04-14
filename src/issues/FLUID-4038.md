---json
{
  "title": "FLUID-4038",
  "summary": "Renderize the Uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2011-01-20T12:27:28.138-0500",
  "updated": "2015-06-09T10:26:53.899-0400",
  "versions": [
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.1.3",
    "1.2beta1",
    "1.2",
    "1.2.1",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3725/",
      "key": "FLUID-3725",
      "summary": "Refactor the Uploader's file queue subcomponent"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-01-20T12:28:19.534-0500",
      "body": "Renderizing the Uploader depends on having a clear, consolidated model for the Uploader, which will involve refactoring the FileQueue object.\n"
    }
  ]
}
---
The Uploader currently uses plain old jQuery to Render its entire UI. This makes it more challenging for users to handle markup, and causes a significant amount of boilerplate code that can be removed by using the Fluid Renderer.

        