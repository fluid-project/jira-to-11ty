---json
{
  "title": "SJRK-287",
  "summary": "Unable to save a story with a GIF image",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Gregor Moss",
  "date": "2019-09-12T19:40:21.107-0400",
  "updated": "2020-02-14T14:14:20.455-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-02-14T14:14:20.445-0500",
      "body": "GIF uploads worked fine in Chrome 79, Firefox 72 and Edge 80, both running locally and on the FLOE staging site. Can't reproduce the issue.\n"
    }
  ]
}
---
Reported by David at the Cities Co-design Session: users were unable to save a story with a GIF image in it.

This may be a symptom of the issue identified in SJRK-285, and so it may not be a problem. If this isn't possible to reproduce, it is likely that the server simply refused to publish stories with payloads greater than 1 MB (which many GIF files exceed)

        