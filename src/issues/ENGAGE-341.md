---json
{
  "title": "ENGAGE-341",
  "summary": "Integrate media section for the Artifact View",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2010-02-08T15:51:28.000-0500",
  "updated": "2010-02-12T17:31:42.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Artifact View"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-341/fe_mobile_icon_audio.png",
      "filename": "fe_mobile_icon_audio.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-341/fe_mobile_icon_video.png",
      "filename": "fe_mobile_icon_video.png"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-08T15:55:11.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-09T11:10:05.000-0500",
      "body": "A keyframe/thumbnail should be used for video, but if no keyframe/thumbnail is available, use the attached video icon\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:44:45.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:44:58.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-12T15:03:51.000-0500",
      "body": "I'm reopening this issue since we still need to add and correctly reference the media icons.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-02-12T17:31:42.000-0500",
      "body": "I reviewed this fix at 9389\n"
    }
  ]
}
---
Based on the wireframes, Artifact View should show a list of all audio, video and podcasts associated with the artifact. It should be part of the artifact sections along with comments and related artifacts.

        