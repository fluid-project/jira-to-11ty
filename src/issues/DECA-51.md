---json
{
  "title": "DECA-51",
  "summary": "Disable Export if there are no contents in book",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2010-03-29T15:43:27.000-0400",
  "updated": "2012-05-25T13:31:14.883-0400",
  "versions": [
    "0.3",
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
      "date": "2010-07-14T11:26:44.209-0400",
      "body": "Bug Parade Decapod 0.4\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-25T13:31:11.149-0400",
      "body": "You can only export when images are provided for import\n"
    }
  ]
}
---
If there are no images inside a book, then the export button should be disabled.

        