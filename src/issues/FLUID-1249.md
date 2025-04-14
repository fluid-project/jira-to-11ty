---json
{
  "title": "FLUID-1249",
  "summary": "Implement the Scroller component to provide scrollability for components.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Colin Clark",
  "date": "2008-08-20T11:30:54.000-0400",
  "updated": "2011-02-22T16:27:44.263-0500",
  "versions": [],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-08-29T00:04:29.000-0400",
      "body": "Eli mentioned that Ariel Flesler has a ScrollTo jQuery plugin that may be worth considering as an alternative to ours. Need to decide whether to use this or continue to evolve ours.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-10-21T23:04:24.000-0400",
      "body": "We've decided to go with a very bare bones version of the Scroller for the first release of Uploader 2. The current component is working, though not robustly tested. This should do the trick for now.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:44.262-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
In the current Uploader, there's great useful functionality for handling scrollable views. This needs to be split out into a self-contained component with a convenient API, including:

scrollToTop()\
scrollToBottom()\
scrollToElement(element)

This is the sort of component that should probably do its own self-rendering when the requisite DOM wrappers aren't already present.

dev-iteration43

        