---json
{
  "title": "DECA-100",
  "summary": "Evaluate the application of decapod-stitching script",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2010-04-20T15:50:53.000-0400",
  "updated": "2012-01-10T09:50:22.156-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/DECA-50/",
      "key": "DECA-50"
    },
    {
      "type": "Dependence",
      "url": "/browse/DECA-25/",
      "key": "DECA-25"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-06-14T12:23:37.322-0400",
      "body": "Evaluate after 0.5 release after bugs relating to capture left-right have been fixed.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-07-15T16:34:01.684-0400",
      "body": "Stitching will be removed in future releases.\n"
    }
  ]
}
---
In Decapod 0.3, images are being stitched together which has a performance cost. However, stitching may not be required for the following reasons:

1\. The images can be displayed side by side using CSS, thus not having to do a costly operation.\
2\. With content area detection, it doesn't really matter if the images are stitched or not.\
3\. Images are split apart according to their content area at time of export anyway.

Questions:\
1\. What is the purpose of stitching?\
2\. What advantage does it offer?

        