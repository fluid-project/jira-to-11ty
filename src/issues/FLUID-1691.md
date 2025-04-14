---json
{
  "title": "FLUID-1691",
  "summary": "Add a public cancel method to InlineEdit, allowing people to use Save/Cancel buttons in their markup if desired.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2008-10-20T12:25:18.000-0400",
  "updated": "2011-02-22T16:27:59.412-0500",
  "versions": [
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1693/",
      "key": "FLUID-1693"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-10-20T16:13:37.000-0400",
      "body": "Here's a patch containing a working proof-of-concept of Inline Edit hosting a TinyMCE editor.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-13T21:39:11.000-0500",
      "body": "Merged into trunk at revision 6031. See working demos at manual-tests - automated test cases to follow.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:59.411-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
At the moment, there's no way to cancel an in-progress inline edit. A public cancel() method would allow implementers to use Save/Cancel buttons, or bind the cancel method to the Esc key or other common shortcut.

        