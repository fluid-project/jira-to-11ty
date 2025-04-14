---json
{
  "title": "FLUID-919",
  "summary": "Text on buttons in uploader are not centred",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-07-16T17:45:11.000-0400",
  "updated": "2011-01-05T15:37:57.935-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF3, Opera 9.6 (Mac OS 10.5, Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2571/",
      "key": "FLUID-2571"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-919/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-919/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-16T17:45:58.000-0400",
      "body": "'screenshot-1' shows the buttons in Opera\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-16T17:47:19.000-0400",
      "body": "'screenshot-2' shows the buttons in FF3\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-24T20:09:58.000-0400",
      "body": "I've made some minor changes to the CSS which help FF but don't mess up Safari or IE (tested 6 not 7) but the fix for Opera is more involved.\n\nI'll leave this open while I think about it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-16T14:50:35.000-0400",
      "body": "Affects Uploader 2\n\nLess noticeable in FF3 now.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-05T15:37:57.933-0500",
      "body": "No longer an issue in Infusion 1.3\n"
    }
  ]
}
---
The text on the buttons in uploader are not centred.

Opera: too high

FF3: too low

        