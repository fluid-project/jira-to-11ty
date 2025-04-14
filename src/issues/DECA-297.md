---json
{
  "title": "DECA-297",
  "summary": "Filenames for Export to PNG and TIFF not the same order as input images",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2012-08-15T12:26:35.538-0400",
  "updated": "2012-09-04T13:18:13.817-0400",
  "versions": [],
  "fixVersions": [
    "0.6"
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
      "date": "2012-08-21T11:06:44.292-0400",
      "body": "Updated so that the images are numbered so that they retain their order. The name would look like \"image-index.format\"\n\nThe changes are in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-0.6-server-iteration5>\n"
    }
  ]
}
---
The images in export TIFF and PNG are not the same filename order as the input.

The order is all random which makes mapping the images back to the original order extremely difficult.

        