---json
{
  "title": "FLUID-3975",
  "summary": "When using keyboard to open and close UI Options, pressing escape does not close the UI Options panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jen Chow",
  "date": "2010-12-20T16:11:46.456-0500",
  "updated": "2014-06-25T16:05:40.912-0400",
  "versions": [
    "1.3",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "Sliding Panel",
    "UI Options"
  ],
  "environment": "Win XP IE6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T16:05:40.911-0400",
      "body": "We are no longer actively supporting IE6. We will consider patches for certain issues.\n"
    }
  ]
}
---
Per QA test, pressing escape should close the UI Options panel, but it doesn't on both the demo portal site and the Sakai mock-up.

        