---json
{
  "title": "FLUID-6592",
  "summary": "Standard configuration for schema validated component should just validate the component's model",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Tony Atkins [RtF]",
  "reporter": "Antranig Basman",
  "date": "2021-01-18T09:28:52.793-0500",
  "updated": "2021-01-18T09:38:48.617-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2021-01-18T09:38:48.579-0500",
      "body": "<https://github.com/fluid-project/fluid-json-schema/issues/33>\n"
    }
  ]
}
---
As per discussion in Fluid Technology on 18/1/21 - it would be helpful if the principally advertised configuration for fluid-json-schema just validated a component's model, dealing with the use case of validating submitted user input. The grade which validates a component's entire options should be a separate piece of machinery which can be opted in to.

        