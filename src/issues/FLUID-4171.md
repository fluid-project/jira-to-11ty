---json
{
  "title": "FLUID-4171",
  "summary": "Update UI Options to use renderer component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2011-04-01T12:53:53.253-0400",
  "updated": "2011-06-13T12:45:07.562-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3762/",
      "key": "FLUID-3762",
      "summary": "Update UI Options to use current framework features"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-05-06T13:33:37.691-0400",
      "body": "This issue is a duplication of <https://fluidproject.atlassian.net/browse/FLUID-3762#icft=FLUID-3762>.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-05-09T13:08:39.859-0400",
      "body": "Changes are done in commit code: b5974e3939f8e2d91dbabb1b0e0e6366d9897b2d\n\nUnder code review.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T11:29:58.461-0400",
      "body": "has been pushed up to the project repo\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-08T10:24:59.262-0400",
      "body": "According to the code review, removed the uiEnhancer from the sub-component list of fluid.uiOptions. Only expose the necessary parts of the uiEnhancer instead of the whole to fluid.uiOptions.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-13T12:44:47.821-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/73> merged into the project repo at 08651ef62ce1594ccf4ac91af61f0d18173f5a48\n"
    }
  ]
}
---
Update the UI Options to use the new framework feature of renderer component.

        