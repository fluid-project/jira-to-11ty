---json
{
  "title": "FLUID-4517",
  "summary": "Words don't wrap if they're too long",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "James Yoon",
  "date": "2011-10-11T16:36:58.143-0400",
  "updated": "2013-10-04T11:21:31.935-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "Windows 7, FF\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
To replicate:

In the UIO demo, set text size to maximum. Note behaviour of word "Introduction" in its column--it extends beyond the column boundaries and into the next. This is particularly evident in the contrast themes (e.g., b/y) where the colours "truncate" the text prematurely.

        