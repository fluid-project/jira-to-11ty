---json
{
  "title": "ENGAGE-424",
  "summary": "Images and thumbnails do not have alt texts",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "James Yoon",
  "date": "2010-02-19T16:30:20.000-0500",
  "updated": "2010-02-23T13:02:40.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-02-19T16:30:31.000-0500",
      "body": "a11y issue\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-02-19T17:07:16.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-22T10:18:33.000-0500",
      "body": "A quick stopgap solution might be to use \"Image of \\[artifact name]\" as the alt text for artifact images, \"Thumbnail of \\[artifact name]\" as the alt text for artifact thumbnails, \"Image of \\[exhibition name]\" as the alt text for exhibition images, and \"Thumbnail of \\[exhibition name]\" as the alt text for exhibition thumbnails.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-23T12:45:16.000-0500",
      "body": "Set the alt text of museum related images to be either the artifact or exhibition title.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-23T13:02:40.000-0500",
      "body": "While this issue is a little heavy-handed, I think it will work just fine for Engage 0.3b. In the future, we should ensure that alt text is more configurable for the NavList, so that we don't enforce a contract where all NavList item images are automatically given an alt text equivalent to their title.\n"
    }
  ]
}
---
The following do not have alt texts:

* Artifact thumbnails (catalogue, My Collection, etc.),
* Artifact images (in artifact view),
* Exhibition thumbnails
* Exhibition images
* Language selection flag on the "Change language" screen

        