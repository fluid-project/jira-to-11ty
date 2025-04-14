---json
{
  "title": "DECA-71",
  "summary": "Document issue if attaching camera with memory card installed",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2010-03-26T11:46:58.000-0400",
  "updated": "2012-12-03T11:07:48.648-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.7"
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
      "date": "2012-09-26T14:29:52.526-0400",
      "body": "if there is a memory card in the camera, the OS will try to mount it. If it is mounted the camera will be locked and gphoto won't be able to use it to capture images. Unmounting the memory card will fix the issue.\n\nThere does not seem to be a way in gphoto to get it to automatically unmount the memory card.\n"
    }
  ]
}
---
If a camera contains a memory card and it is attached to the Decapod system, the kernel may try to mount the card's filesystem and lock out Decapod.

Investigate how the presence of memory cards affects the functionality of Decapod, and determine the issues and possible fixes.

This should be documented.

        