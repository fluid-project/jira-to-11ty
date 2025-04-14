---json
{
  "title": "FLUID-2488",
  "summary": "Selecting a canape in the data binding renderer sample causes the layout to \"jump\" on IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "James Yoon",
  "reporter": "Antranig Basman",
  "date": "2009-04-02T16:14:42.000-0400",
  "updated": "2014-06-25T16:03:00.551-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Renderer"
  ],
  "environment": "IE6, Win2k\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T16:03:00.550-0400",
      "body": "We are no longer actively supporting IE6. We will consider patches for certain issues.\n"
    }
  ]
}
---
After all the canapes are selected, the panel will jump to a lower position in IE6. If one is unselected, it will jump back to its original position. This is probably just a CSS/layout issue.

        