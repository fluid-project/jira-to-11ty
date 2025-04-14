---json
{
  "title": "ENGAGE-371",
  "summary": "Artifact View doesn't correctly show the default video and audio images for media within the \"Show Audio and Video\" section",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Colin Clark",
  "date": "2010-02-11T10:25:30.000-0500",
  "updated": "2010-02-16T11:25:11.000-0500",
  "versions": [
    "0.3b"
  ],
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-371/ENGAGE-371-no-media-images.jpg",
      "filename": "ENGAGE-371-no-media-images.jpg"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-11T10:25:41.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-16T11:24:52.000-0500",
      "body": "I fixed this issue at r9389 (filed under the more general <https://fluidproject.atlassian.net/browse/ENGAGE-341#icft=ENGAGE-341>).\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-16T11:25:11.000-0500",
      "body": "Antranig reviewed my fix for this against <https://fluidproject.atlassian.net/browse/ENGAGE-341#icft=ENGAGE-341> and it has been included in trunk\n"
    }
  ]
}
---
In Artifact View, the default audio and video images aren't being displayed for media associated with an artifact when there is no poster image specified.

        