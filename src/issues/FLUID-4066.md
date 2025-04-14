---json
{
  "title": "FLUID-4066",
  "summary": "The word \"edit\" in tooltip doesn't match capitalization on the \"Edit\" link",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2011-02-16T11:08:48.236-0500",
  "updated": "2012-03-26T16:49:05.953-0400",
  "versions": [
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4066/FLUID-4066.patch",
      "filename": "FLUID-4066.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4066/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Ameesh Arya",
      "date": "2012-03-26T15:37:57.883-0400",
      "body": "The word \"edit\" in the tooltip is changed to \"Edit\" so that it can be consistent.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2012-03-26T16:48:01.834-0400",
      "body": "Reviewed Ameesh's patch and it looks fine. Will recommend it be committed to the source code.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-03-26T16:49:02.385-0400",
      "body": "Merged in <https://fluidproject.atlassian.net/browse/FLUID-4066#icft=FLUID-4066>.patch to the project repo at ed9b66156fe87cf2533c08adcded4f0cc4495d93\n"
    }
  ]
}
---
The tooltip says: "Use the edit link to make changes."\
The tooltip should use "Edit" (capital E) to be consistent.

        