---json
{
  "title": "FLUID-5093",
  "summary": "The components block of the dynamic grade is not merged in if the target component block has other existing components",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2013-07-18T11:32:12.954-0400",
  "updated": "2013-07-31T10:31:38.883-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2013-07-31T10:31:32.602-0400",
      "body": "Merged into master @ 81831f9fdf80cff097896a30fcb9dc0461a46abb\n"
    }
  ]
}
---
Merging of other options happens as expected except the components block.

If the existing components are supplied as a grade, the merging, including the components block, will occur correctly.

The test case can be found at <https://github.com/fluid-project/infusion/pull/364>

        