---json
{
  "title": "FLUID-2559",
  "summary": "Focus on Upload (and stop upload) buttons if very faint - should be more distinct",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Daphne Ogle",
  "date": "2009-04-07T16:12:03.000-0400",
  "updated": "2009-04-14T10:11:18.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "PC - XP IE7 / Flash 9\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-892/",
      "key": "FLUID-892",
      "summary": "Not enough focus contrast for Uploader in IE"
    }
  ],
  "attachments": [],
  "comments": []
}
---
When the Upload (and stop upload) button is in focus, the browsers default faint dotted line is very difficult to see.  While doing the keyboard QA tasks, I couldn't tell when the Stop Upload button was in focus in order to the task (need to figure it out quick).  Can we increase the line thickness?

        