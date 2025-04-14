---json
{
  "title": "FLUID-2328",
  "summary": "Renderer explodes in environment which has corrupted Array.prototype",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2009-03-10T12:38:33.000-0400",
  "updated": "2009-11-13T08:58:54.000-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
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
      "date": "2009-03-10T12:39:56.000-0400",
      "body": "Fixed at revision 6706\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T08:58:54.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
When run in an environment which has corrupted Array.prototype (e.g. Confluence), use of the renderer will fail with the message "child.ID is not defined".

        