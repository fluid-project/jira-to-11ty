---json
{
  "title": "FLUID-5623",
  "summary": "Tutorials category in the docs table of contents lacks all documents",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2015-04-16T09:34:19.768-0400",
  "updated": "2015-04-23T11:36:08.459-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2015-04-17T14:14:44.847-0400",
      "body": "Merged at f8cf450689d3ccf88edc306595a0e6659753f826\n"
    }
  ]
}
---
The ToC for the tutorials section is missing documents. The problem is when someone navigates to a tutorial doc using one of the tutorial landing pages, it's unclear where they are in the hierarchy.

Solution is to surface these missing docs to the ToC and create sections like how it is done with the Renderer section.

        