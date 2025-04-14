---json
{
  "title": "CITY-24",
  "summary": "Images not displaying in narrow browser windows",
  "tags": "CITY",
  "project": {
    "key": "CITY",
    "title": "Inclusive Cities"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "To Do",
  "assignee": "Simon Bates",
  "reporter": "Michelle D'Souza",
  "date": "2018-09-14T11:25:16.150-0400",
  "updated": "2018-09-14T11:26:38.396-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2018-09-14T11:26:38.396-0400",
      "body": "@@Simon Bates looked into this briefly and it appears that we have a rule that only uses 70% of the window. To see the images, windows needs to be 1/0.7 the width of the image or else the image is hidden.\n"
    }
  ]
}
---
When a browser window is narrow, instead of scaling down images or providing a scroll bar, images on the site just don't show up.

 

 

        