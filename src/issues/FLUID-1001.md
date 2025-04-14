---json
{
  "title": "FLUID-1001",
  "summary": "Inline edit unit tests fail in safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2008-07-23T18:37:17.000-0400",
  "updated": "2008-07-24T16:52:18.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari 3 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-832/",
      "key": "FLUID-832",
      "summary": "Inline Edit tests fail on Safari"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1001/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-23T18:37:51.000-0400",
      "body": "'screenshot-1' shows the failed unit tests\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-24T16:51:54.000-0400",
      "body": "Duplicates Fluid-832\n"
    }
  ]
}
---
Fails the  following unit tests:

7.4, 7.5, 7.6

all of 10, 14, 15, 16

        