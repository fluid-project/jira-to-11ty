---json
{
  "title": "FLUID-6434",
  "summary": "Resource-loaded model entries cannot be resolved from nested paths",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-11-25T10:42:26.164-0500",
  "updated": "2021-06-21T12:37:12.380-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
This problem was seen in updating gpii-handlebars to the latest <https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145>/FLUID-6148 releases in <https://github.com/GPII/gpii-handlebars/pull/30> . \
These included configuration like so:

```java
model: {
            templates: "{that}.resources.templates.parsed.templates"
        }
```

where this now appears to resolve to undefined - this is a regression with respect to earlier versions of the FLUID-6148 branch.

        