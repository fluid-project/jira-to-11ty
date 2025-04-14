---json
{
  "title": "DECA-277",
  "summary": "Add Export to TIFF, PNG functionality to the server",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2012-06-08T15:44:50.490-0400",
  "updated": "2012-07-03T10:38:26.310-0400",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-06-11T15:33:04.878-0400",
      "body": "This should just be a straight conversion of format, no processing or other changes. Since this is meant for preservation.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-06-29T12:59:54.122-0400",
      "body": "Implemented the image export. I had to do a bunch of refactoring, especially to pdf.py, to better structure and reuse code for the image export.\n\nThe changes are in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-0.6-server-iteration2>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-03T10:38:23.706-0400",
      "body": "merged into the googlecode project repo\n"
    }
  ]
}
---
Add basic Export to PNG, and TIFF support to the Decapod server.

* Exports into an uncompressed ZIP file.
* Image files taking .PNG and  .TIF extensions.
* The export is a simple conversion process, with no processing of images

        