---json
{
  "title": "FLUID-430",
  "summary": "Parameterize all element IDs so that they aren't hard-baked into the code",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-04-04T12:04:15.000-0400",
  "updated": "2011-01-19T08:25:36.333-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Workshops, Presentations, Reports"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-04-23T20:42:27.000-0400",
      "body": "initListBuilder() now takes an argument called elementSelectors that allows the client to customize which selectors are used to bind to the DOM. Defaults are configured which will allow for a working single instance of the ListBuilder based on the default template, or the user could modify these for different templates or multiple instances.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-19T08:23:50.294-0500",
      "body": "Reopening these issues in order to add the workshopcomponent to them\n"
    }
  ]
}
---
This task includes breaking up some of the selection code into separate functions so it is less duplicated. Then we'll pass in a map to the List Builder's constructor that will automatically fetch DOM elements via jQuery.

        