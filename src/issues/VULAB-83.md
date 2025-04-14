---json
{
  "title": "VULAB-83",
  "summary": "Fix Video jitter issues",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "David Makalsky",
  "reporter": "David Makalsky",
  "date": "2008-11-09T21:42:38.000-0500",
  "updated": "2008-12-01T10:48:26.000-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "RASCAL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "David Makalsky",
      "date": "2008-12-01T10:48:26.000-0500",
      "body": "initial fix done.  Will investigate further\n"
    }
  ]
}
---
There are some jitter issues with respect to audio and video not synching.  This is largely due to the fact that the JVM is non-realtime, so code like wait(100) to make RASCAL wait 100 ms, are useless.  In effect, what happens is that RASCAL waits at least 100 ms.  Fortunately, each of the snapshots are timestamped, and it's not difficult to 'pad' the missing pieces by simply extending the frame for an additional period.  A post-processing pass is necessary to smooth out the video here.

VULAB7

        