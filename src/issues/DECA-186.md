---json
{
  "title": "DECA-186",
  "summary": "Gradient background image for progress bar not appearing in Decapod's uploader / import",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2011-10-28T10:45:53.314-0400",
  "updated": "2012-06-11T16:27:53.295-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-25T15:58:36.399-0400",
      "body": "The uploader's progress bar was removed from the UI. The import and export stages are tightly integrated now with an indeterminate progress bar used for the total progress of both tasks.\n"
    }
  ]
}
---
When uploading a file to Decapod, the green background for the progress bar does not appear.

        