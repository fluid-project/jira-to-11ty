---json
{
  "title": "FLUID-1833",
  "summary": "Bring Pager into the 20th Century",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2008-11-20T16:09:29.000-0500",
  "updated": "2011-02-22T16:27:45.069-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1840/",
      "key": "FLUID-1840"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-902/",
      "key": "FLUID-902",
      "summary": "Port Pager to new component structure"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-11-26T13:42:21.000-0500",
      "body": "Welcome to the modern world, Pager.\n\nPagerBar still needs to be refactored, as its event binding code is a bit over-engineered. Otherwise, we've got a fully modern Pager that is ready to be render-ified and grown.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:45.067-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The pager is now our stalest component, with development essentially stalled for several months. There have been many framework improvements and API specifications in this time, with which the pager should be brought up to date. For example, use of "that"-ism, use of the DOM binder, use of events and the "on/after" convention.

        