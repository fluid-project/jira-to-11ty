---json
{
  "title": "FLOE-576",
  "summary": "Contents of \"Table of Contents\" overlap with each other when line spacing is less than 1",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Sachin Chopra",
  "date": "2020-02-27T14:56:45.707-0500",
  "updated": "2020-09-23T08:56:42.950-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "FLOE Website"
  ],
  "environment": "Desktop\\\nOS: Ubuntu 18.04\\\nBrowser: Chrome\\\nVersion: 80.0.3987.122 (Official Build) (64-bit)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-576/87943276_565176140759600_2311083350351151104_n.png",
      "filename": "87943276_565176140759600_2311083350351151104_n.png"
    }
  ],
  "comments": [
    {
      "author": "Ned Zimmerman",
      "date": "2020-09-23T08:56:42.948-0400",
      "body": "Closing in favour of [Links overlapping in footer](https://github.com/fluid-project/floeproject.org/issues/121).\n"
    }
  ]
}
---
Contents of "Table of Contents" overlap with each other when line spacing is less than 1.

### To reproduce

Steps to reproduce the behavior:

1. Go to Preferences.
2. Turn on the table of contents.
3. Reduce the line spacing to some number less than 0.9
4. See error

### Expected behavior

The different points in the table of contents should not overlap when line spacing is decreased.&#x20;

<!-- media: file 72ce27f1-453d-4446-b8ed-83613b21ec7b -->

 

        