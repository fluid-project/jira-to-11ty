---json
{
  "title": "FLUID-5782",
  "summary": "The jquery UI menu doesn't close when you click on it",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2015-09-30T16:00:10.504-0400",
  "updated": "2021-10-21T14:27:34.250-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2021-10-21T14:27:28.829-0400",
      "body": "We have migrated away from docpad and no longer using jquery UI menu.\n"
    }
  ]
}
---
In mobile layout, the top menu "hamburger" button doesn't close when you click on it, but it closes if you put focus somewhere else.

It should close if you click it.

        