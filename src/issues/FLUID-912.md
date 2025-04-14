---json
{
  "title": "FLUID-912",
  "summary": "Opera 9.5 fails inline edit unit tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2008-07-16T14:33:03.000-0400",
  "updated": "2008-08-06T13:24:20.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-912/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-912/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-16T14:33:22.000-0400",
      "body": "'screenshot-1' shows the failed unit test\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-23T17:40:29.000-0400",
      "body": "'screenshot-2' shows other failed unit tests\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-06T13:24:20.000-0400",
      "body": "Appears to have been fixed in the latest build\n"
    }
  ]
}
---
The inline edit unit test 5.2 "Inline edit test module: Invitation Text (none) - The display field has no padding", fails in Opera 9.5.

Now also fails tests 14, 15, and 16

        