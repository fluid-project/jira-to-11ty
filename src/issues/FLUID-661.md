---json
{
  "title": "FLUID-661",
  "summary": "Remove icon / button reads as \"button\" in JAWS on Firefox",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-05-28T15:43:24.000-0400",
  "updated": "2008-06-03T14:26:37.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Win XP, FF2\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-666/",
      "key": "FLUID-666",
      "summary": "Enhance Uploader accessibility"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-05-29T13:51:34.000-0400",
      "body": "After doing some testing, it would seem that JAWS would only read the text between open and close Button elements.\n\nSince the Remove buttons do not have text, JAWS will just read \"Button\".\n\ni.e.\\\n\\<button >Submit\\</button > will be read as \"Submit button\"\\\n\\<button >\\</button > will be reads as \"button\"\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-05-29T18:25:20.000-0400",
      "body": "I added some descriptive text inside the remove button for JAWS. Hiding it with display: none; seems to do the trick.\n\nJonathan, can you confirm this fix?\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-06-03T14:26:37.000-0400",
      "body": "Confirmed closed. Works well in IE7 and FF2.\n"
    }
  ]
}
---
When tabbing through a list of files that are queued to upload, focusing on the remove file button (the red X) will read as "button" in JAWS.

The button should read "Remove file from Upload queue" or something more descriptive.

In IE7, it reads as "Remove file button".

        