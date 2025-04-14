---json
{
  "title": "FLUID-3486",
  "summary": "fluid.fetchResources() adds \"callbackCalled\" to resourceSpecs, but \"callbackCalled\" is not a resourceSpec",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2010-01-28T15:04:54.000-0500",
  "updated": "2011-01-20T15:12:25.912-0500",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-08-05T02:07:43.838-0400",
      "body": "Fixed at revision 9977, along with various other improvements to fluid.fetchResources to aid client-side pipelining\n"
    }
  ]
}
---
The Renderer function fluid.fetchResources() adds a boolean flag called "callbackCalled" to the resourceSpecs object it's working on. The problem occurs when any callback then tries to process the resourceSpecs object assuming that everything in it is a resourceSpec i.e. has an 'href' field.

In particular, I'm getting an error in fluid.parseTemplates() when it tries to compute 'lastslash.'

        