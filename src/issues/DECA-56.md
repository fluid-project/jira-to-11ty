---json
{
  "title": "DECA-56",
  "summary": "Preview image cropped at bottom of viewport - implement a scaler or zoomer",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2010-03-30T17:32:37.000-0400",
  "updated": "2012-05-25T13:33:13.075-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-81/",
      "key": "DECA-81",
      "summary": "Generate smaller pictures to be displayed on the UI"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-04-20T10:25:28.000-0400",
      "body": "May be fixed by using scaled version of images. (<https://fluidproject.atlassian.net/browse/DECA-81#icft=DECA-81>)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-25T13:33:13.074-0400",
      "body": "The preview has been removed.\n"
    }
  ]
}
---
When an image is being displayed in the preview area, it is cropped to fit the viewport.

Consider implementing a zoomer or some sort of image scaling so that quality can be discerned&#x20;

        