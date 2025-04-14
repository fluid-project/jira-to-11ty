---json
{
  "title": "FLUID-3408",
  "summary": "Move website into virtual server.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-12-04T10:01:01.000-0500",
  "updated": "2010-01-06T13:44:54.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder",
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-04T10:23:58.000-0500",
      "body": "Because this task cannot be completed in time for the Infusion Builder release, we are instead going to release to a virtual server and create a subdomain name to refer to it such as infusion-builder.fluidproject.org\n"
    },
    {
      "author": "Jamon Jamon",
      "date": "2009-12-04T15:15:50.000-0500",
      "body": "<http://infusion-builder.fluidproject.org/> is setup.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-04T17:57:59.000-0500",
      "body": "Ok, I'm confused about the specifics of this. It seems to me that in fact we don't need to move the web site to a virtual server, we need to move the Infusion Builder deployment to a virtual server. Is that clear to everyone, or am I missing some detail? Seems reasonable since the Web site and the Builder are no longer coupled in any way.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-01-06T13:44:49.000-0500",
      "body": "Infusion builder was moved into a virtual server.\n"
    }
  ]
}
---
We want to protect the other websites hosted on the server from a crash brought on by the Builder. We need to move the website into a virtual server before the Infusion Builder release.

        