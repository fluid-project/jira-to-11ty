---json
{
  "title": "FLOE-288",
  "summary": "Videos in EPUB exemplar sometimes do not show in Readium",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2015-03-10T16:37:31.410-0400",
  "updated": "2015-06-16T14:05:14.747-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "EPUB"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the EPUB 3 exemplar, embedded HTML 5 video may not appear when viewed in Readium. The video container would appear, but the video will not play.

This issue may be caused by MathML in the content preceding the video. Moving the video and its container further up the DOM tree seems to avoid this problem.

For example, the video in Chapter 2 will not appear if the video's container comes after the "Key Equations" section. But if placed before Key Equations, the video shows up properly.

        