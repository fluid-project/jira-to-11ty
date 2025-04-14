---json
{
  "title": "DECA-154",
  "summary": "If two cameras are connected, and then one is disconnected, capture takes two shots from the connected camera",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2010-07-21T16:00:52.642-0400",
  "updated": "2012-05-25T15:51:39.704-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-25T15:51:39.703-0400",
      "body": "The capture workflow was removed from Decapod 0.5\n"
    }
  ]
}
---
To replicate:\
1\. Capture a page with both cameras connected.\
2\. Unplug one camera.\
3\. Press capture.\
4\. Two shots will be taken from the connected camera.

        