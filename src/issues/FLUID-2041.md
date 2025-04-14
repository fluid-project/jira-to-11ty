---json
{
  "title": "FLUID-2041",
  "summary": "Replace SWFUpload with FancyUpload for more stable, cross-platform uploading in Flash",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-12-21T15:31:25.000-0500",
  "updated": "2010-03-30T14:05:18.000-0400",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3290/",
      "key": "FLUID-3290",
      "summary": "Provide alternative ways to upload multiples files with the Uploader instead of requiring Flash"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-10-13T18:32:24.000-0400",
      "body": "Converting from SWFUpload to FancyUpload might provide us with a more stable platform with a better code base, though still requiring Flash\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T14:05:18.000-0400",
      "body": "With HTML 5 upload now finally viable, I don't see any reason to switch to Fancy Upload.\n"
    }
  ]
}
---
SWFUpload is a disaster. MooTool's FancyUpload--along with their underlying Swiff library for communicating between Flash and JavaScript--seems to be a fair bit better. Switch to it.

        