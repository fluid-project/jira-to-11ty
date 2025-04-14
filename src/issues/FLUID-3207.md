---json
{
  "title": "FLUID-3207",
  "summary": "Provide a framework function for creating \"little components\"--options-bearing objects that don't have a DOM Binder or Events",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-09-24T14:39:23.000-0400",
  "updated": "2011-02-28T16:47:16.125-0500",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-09-24T17:40:03.000-0400",
      "body": "I've reviewed the commit and it looks good.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-14T18:17:41.000-0400",
      "body": "This was committed before bug parade ended for Infusion 1.1.2 at r8089. Michelle reviewed it.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:47:16.123-0500",
      "body": "Closing issues that were fixed in 1.1.2\n"
    }
  ]
}
---
We have lots of little objects in Infusion that aren't full-fledged components, but do participate in options merging. Antranig wrote a function in Kettle called fluid.littleComponent() that sets one of these up. Let's move it into the Infusion framework so it's available for components regardless of whether they're running on the client or the server.

        