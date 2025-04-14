---json
{
  "title": "DECA-50",
  "summary": "Remove image roation from stitching script",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Jonathan Hung",
  "date": "2010-03-30T21:00:40.000-0400",
  "updated": "2010-07-19T15:49:30.492-0400",
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
      "type": "Dependence",
      "url": "/browse/DECA-100/",
      "key": "DECA-100",
      "summary": "Evaluate the application of decapod-stitching script"
    },
    {
      "type": "Supersedes",
      "url": "/browse/DECA-101/",
      "key": "DECA-101"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-07-19T10:50:35.513-0400",
      "body": "Bug Parade Decapod 0.4\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-19T15:35:58.289-0400",
      "body": "We need to invoke stitch with the -Rnn argument to prevent it from doing rotation by default.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-19T15:39:31.352-0400",
      "body": "Fixed in the server at revision d3407db7efea by passing the -Rnn argument to decapod-stitching to prevent automatic rotation, along with accompanying unit tests.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-07-19T15:49:30.489-0400",
      "body": "Confirmed fixed.\n"
    }
  ]
}
---
When calling the stitching script, clockwise and counter-clockwise rotations are performed to adjust for Book Liberator orientations.

This causes problems with other images taken from other sources as they will be incorrectly rotated on both the UI and in any generated PDF.

Rotation is now handled by the UI, so there is no need to have rotations inside this script, and therefore should be removed to prevent improper rotations during stitching.

        