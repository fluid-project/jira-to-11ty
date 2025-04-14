---json
{
  "title": "FLUID-3151",
  "summary": "All links on the demo portal landing page should point to a live resource (not the final report)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Jacob Farber",
  "date": "2009-09-02T16:28:51.000-0400",
  "updated": "2011-01-15T15:23:08.817-0500",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3210/",
      "key": "FLUID-3210",
      "summary": "Remove final-report specific text and links from Demo Portal"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-3210/",
      "key": "FLUID-3210"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-22T10:50:56.000-0400",
      "body": "Bug Parade Infusion 1.1.2&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-30T13:34:46.000-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3210#icft=FLUID-3210> describes this issue more clearly and is more comprehensive of the various checks we need to do before releasing the demo portal.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T12:29:05.468-0500",
      "body": "Reopening these issues in order to add the democomponent.&#x20;\n"
    }
  ]
}
---
At the moment, the demo portal contains a number of links that point back to the final report, rather than live content. We want to ensure that all links point to our live wiki, not to the final report archive.

We should check all other links to make sure they're pointing to the correct spot.

        