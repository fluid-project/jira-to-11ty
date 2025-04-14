---json
{
  "title": "FLUID-4353",
  "summary": "UIO: Enable the configuration of UI options, UI Enhancer and template paths as top-level options",
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
  "date": "2011-07-26T09:28:52.435-0400",
  "updated": "2011-08-08T13:43:09.066-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4384/",
      "key": "FLUID-4384"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-08-08T13:43:00.711-0400",
      "body": "Resolved and merged into project repo @ commit# d06946a552c869ef6078d7c28af4fbc0c734871e\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-08-08T13:43:09.065-0400",
      "body": "Issue closed.\n"
    }
  ]
}
---
Right now, the way that the integrators provide their own configuration to the sub-components of UI Options and UI Enhancer is to utilize the demands block. To improve the configurability and simplify the process, provide a "options chewing" method that interprets the options from the top-level component options and passes them to the appropriate sub-components.

The options that need to be chewed:

1\. UI Options options\
2\. UI Enhancer options\
3\. table of content template path

        