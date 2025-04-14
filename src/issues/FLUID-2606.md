---json
{
  "title": "FLUID-2606",
  "summary": "Image Gallery: In IE, the floating images don't wrap.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-04-16T17:00:29.000-0400",
  "updated": "2011-02-28T16:45:16.935-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Internet Explorer, XPsp2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-04-16T17:02:46.000-0400",
      "body": "Added some block and position styling to the surrounding div to force IE to wrap the floating images.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:16.933-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
In IE, the uploaded images don't wrap in the Browse Images view.

        