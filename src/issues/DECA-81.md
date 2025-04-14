---json
{
  "title": "DECA-81",
  "summary": "Generate smaller pictures to be displayed on the UI",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Michelle D'Souza",
  "date": "2010-03-30T16:12:31.000-0400",
  "updated": "2012-01-10T09:40:50.626-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-56/",
      "key": "DECA-56"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-06-10T16:39:22.524-0400",
      "body": "Changed priority, now to be implemented for 0.4/0.5 instead of 0.6 due to poor performance on VMWare and Apple hardware.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-07-14T11:21:38.406-0400",
      "body": "Bug Parade Decapod 0.4\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-15T19:05:10.011-0400",
      "body": "I've updated the server to only stitch and share images with a maximum dimension of 900 px, which for most images should get us close to James' suggested 1400 x 900 (I think) dimensions.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-19T11:31:48.375-0400",
      "body": "This issue was resolved by introducing a new image processing routine for resizing. We now resize images to a longest dimension of 800 px before stitching and generating thumbnails.\n"
    }
  ]
}
---
Currently we are stitching together the full sized images for display on the UI. We should make the images considerably smaller for display purposes. This will improve the responsively of the UI

        