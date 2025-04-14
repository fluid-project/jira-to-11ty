---json
{
  "title": "FLUID-3677",
  "summary": "Using the listReorderer to drag between columns breaks when dropping the right item on the right side of the left item.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2010-07-12T17:02:04.992-0400",
  "updated": "2014-07-30T15:33:55.407-0400",
  "versions": [
    "1.2",
    "1.2.1",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/DECA-130/",
      "key": "DECA-130"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3677/reordererTest.zip",
      "filename": "reordererTest.zip"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3677/reordererTest v2.zip",
      "filename": "reordererTest v2.zip"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-07-12T17:02:41.978-0400",
      "body": "reordererTest.zip is sample code demonstrating the error\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-11T11:31:29.861-0500",
      "body": "reordeerTest v2.zip is the same as the old one but makes use of the custom build, which should make it easier to keep up to date with later releases\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-30T15:33:47.797-0400",
      "body": "reproduced this issue with Infusion 1.5.\n"
    }
  ]
}
---
Steps to reproduce.

1\) Open the sample code provided (reordererTest.html)

2\) Attempt to drag the text from the left column to the right column.

Note if you drop on the left hand  side of the left item or drag from left to right, it reorders properly. However, dropping the right item on the right hand side of the left item will cause the item to be added to the bottom of the left column and leaving both items in the same column.

looking through the code from line 165 - 168 of GeometricManager.js causes the targeti to increment which in turn skips the i statement starting at line 169. This if statement contains the code that would have moved the item that was originally in the left column to the right.

        