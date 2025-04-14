---json
{
  "title": "FLOE-476",
  "summary": "Implement \"inferred views\" pattern components to support construction of both default self-tracking components and custom user ones",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-09-15T09:34:41.643-0400",
  "updated": "2018-05-08T14:59:24.949-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Learning Dashboard"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-480/",
      "key": "FLOE-480",
      "summary": "Implement editable behaviours for inferredViews"
    },
    {
      "type": "Related to",
      "url": "/browse/FLOE-481/",
      "key": "FLOE-481"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-05-08T14:59:24.947-0400",
      "body": "Closing since new work in starting on this project, being captured in <https://issues.fluidproject.org/projects/MYL3/issues/?filter=allopenissues>\n"
    }
  ]
}
---
As the MyL3 concept has evolved out of our work on learning dashboards and self-tracking concepts, it's become clear that one eventual goal is to allow users to define and track measures that are meaningful to them personally.

Since we can't predict the diversity of desire, one requirement of this is some means by which custom model components can be persisted, and interfaces for editing them generated automatically when they are rendered.

The ability for end users to edit and create such components themselves will flow out of this underlying capacity.

To that end, we need a view component type that can automatically generate selectors and bindings for aspects of its model from information in the model itself.&#x20;

Some initial experimentation towards this is present at <https://github.com/waharnum/myl3/tree/inferredView>, which I am now in the process of bringing under this JIRA with test coverage and refactoring. Currently this works only uses gpii-binder, but it is anticipated it may incorporate gpii-handlebars as well.

        