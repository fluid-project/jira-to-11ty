---json
{
  "title": "DECA-120",
  "summary": "Removing stitching from the Decapod UI",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2010-06-15T16:02:28.768-0400",
  "updated": "2012-05-25T13:39:36.293-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Capture",
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-25T13:39:36.292-0400",
      "body": "The stitching workflow has been removed\n"
    }
  ]
}
---
Currently, stitching is used to merge two independent left and right images. In practice, stitching is not required since images produced by left-right capture visually may not align properly, and if the images were stitched, they would need to be split again for exporting.

Removing stitching would have the following consequences (\*note: only applies to left-right capture mode, and not Stereo capture mode):\
1\. Currently the UI displays a single image as a thumbnail. Without stitching, thumbnails will consist of two images.\
2\. The stitching code also performs binarization. That code needs to be refactored prior to removing stitching.\
3\. When showing the larger version of a page spread, two images are displayed simultaneously (currently only a single image is displayed).

        