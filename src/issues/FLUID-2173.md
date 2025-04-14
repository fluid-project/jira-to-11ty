---json
{
  "title": "FLUID-2173",
  "summary": "Reorderer has difficulties working on bare <tr> rows within table layouts",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2009-01-28T15:53:49.000-0500",
  "updated": "2009-02-02T08:59:38.000-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2172/",
      "key": "FLUID-2172",
      "summary": "Reordering a table row places entire row into a single cell: using FF"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-02T08:59:38.000-0500",
      "body": "Appears to have been resolved with the latest release\n\nTested using:\n\nFF2, FF3 (Mac OS 10.5)\\\nFF3 (Win Vista)\n\nand confirmed by Gonzalo, who initially found this error\n"
    }
  ]
}
---
Various users have reported a form of "layout corruption issue" when the Reorderer is applied to sort bare \<tr> elements within an overall table - although so far these issues have produced tricky to reproduce. I have created a sample manual-tests/table-tr as a placeholder for a test which demonstrates the issue - currently it seems to work.

        