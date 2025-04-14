---json
{
  "title": "FLUID-1657",
  "summary": "Add the ability to inject components dynamically",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2008-10-01T16:30:10.000-0400",
  "updated": "2011-02-22T16:28:00.811-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-02-10T15:47:15.000-0500",
      "body": "The table of contents component now does this but it should be factored out into the framework.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-05T13:44:14.000-0500",
      "body": "This is done in for the table of contents by simply initializing the component. The table of contents component pulls in a template and renders it using the fluid renderer. &#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:28:00.810-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
For example a table of contents.&#x20;

        