---json
{
  "title": "FLUID-1781",
  "summary": "Refactor Inline Edit so that it is \"View\" oriented",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2008-11-07T13:05:06.000-0500",
  "updated": "2011-02-22T16:27:47.676-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-11-07T13:11:17.000-0500",
      "body": "Initial work at revision 5977. Needs extension so that all \"view\"-specific code resides within the view.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-13T21:42:43.000-0500",
      "body": "Work merged into trunk at revision 6031. \"view\" concept is itself factored into orthogonal aspects of an \"accessor\" and a \"refreshable view\"\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:47.674-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The assumptions about its view and edit "views" are currently baked into the structure of InlineEdit, making it hard to adapt to other view types, for example rich text views, or views with other data types (dropdowns, date edit). The component should be refactored so that it is oriented around the concept of a "view" of the model, of which the display and edit modes should be instances. In particular, the formality for reading and writing the view-specific representation of the model data should be abstracted.

        