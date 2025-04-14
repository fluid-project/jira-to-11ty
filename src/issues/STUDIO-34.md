---json
{
  "title": "STUDIO-34",
  "summary": "Images that are smaller than the thumbnail size do not get scaled up. ",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2011-12-14T16:22:49.911-0500",
  "updated": "2014-03-04T11:53:59.085-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-03-04T11:53:59.084-0500",
      "body": "The fluid studios site has been taken down. There are no current plans to replace it.\n"
    }
  ]
}
---
If a user selects a featured image for their posting that is smaller than the thumbnail size it retains its original size. This makes the front page of the studios look quite awkward. We should scale up to the point where the width is at least the thumbnail width and the height is at least the thumbnail height and then crop if needed.&#x20;

        