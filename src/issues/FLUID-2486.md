---json
{
  "title": "FLUID-2486",
  "summary": "Double clicking or clicking fast on \"next/previous\" links in pager does not cause advance of 2 pages in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2009-04-02T15:59:44.000-0400",
  "updated": "2014-06-25T16:04:53.560-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Framework",
    "Pager"
  ],
  "environment": "IE6 Win2k\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T16:04:53.559-0400",
      "body": "We are no longer actively supporting IE6. We will consider patches for certain issues.\n"
    }
  ]
}
---
We need a piece of framework infrastructure that will allow clicks to be counted reliably. This is not completely easy, from experience.

        