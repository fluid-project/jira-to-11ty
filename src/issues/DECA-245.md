---json
{
  "title": "DECA-245",
  "summary": "The 'Add More' button is functionally disabled, but the styling isn't changed",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Justin Obara",
  "date": "2012-05-14T13:47:45.909-0400",
  "updated": "2012-05-23T12:22:10.953-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [],
  "components": [
    "Export"
  ],
  "environment": "Firefox 12 (Ubuntu 10.04)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-245/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-14T13:54:03.078-0400",
      "body": "Screenshot.png shows that the 'Add More' button appears enabled when it should be disabled.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-23T12:22:04.493-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
Steps to reproduce:

1\) Launch Decapod

2\) Add some images to import

3\) Trigger the "Start Export" button for any of the export types

4\) Attempt to add more images\
Note that the 'Add More' button is functionally disabled, but it visually appears enabled still.

        