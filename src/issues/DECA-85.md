---json
{
  "title": "DECA-85",
  "summary": "Make Decapod more easily testable",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Boyan Sheytanov",
  "reporter": "Boyan Sheytanov",
  "date": "2010-03-15T12:08:35.000-0400",
  "updated": "2010-06-14T15:14:06.863-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Boyan Sheytanov",
      "date": "2010-03-15T12:32:34.000-0400",
      "body": "Item 1. from description finished\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-03-25T16:36:23.000-0400",
      "body": "We need to come up with a more maintainable solution for the mock server. Currently it is almost completely cut and pasted from the real server which means that changes to one require the same changes be made to the other.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-06-14T15:14:06.847-0400",
      "body": "this issue is a bit broad and the pieces of it are being worked on in various other areas.\n"
    }
  ]
}
---
Decapod needs to be easily testable. For this purpose the following needs to be done:

1\. Implement a mock server that does not require cameras or work with gPhoto. It should always pretend there are two cameras attached to the system and should return images from the local file system.\
2\. Split Capture into several components - one handling the general workflow and others for each use case specific tasks (e.g. book liberator crop & stitch, stereo dewarping)\
3\. Provide mock test components that do nothing and return some test images instead.

Other items may be added to the list if needed.

        