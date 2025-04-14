---json
{
  "title": "DECA-260",
  "summary": "When adding additional image files to import, using the \"Add More\" button, file status message doesn't update",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-05-16T12:47:39.654-0400",
  "updated": "2012-06-11T16:27:53.389-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Export"
  ],
  "environment": "FF 12, Chrome 18 (Ubuntu 10.04)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-17T13:51:36.299-0400",
      "body": "Re-implemented the importStatus component. It had been lacking the ability to add additional valid files, and didn't have a true model. This was all addressed.\n\nThe changes can be found in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-ui-05release>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:48:00.457-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
The files are queued up properly, it's just the status message that doesn't update as it should.

Steps to reproduce:

1\) Launch Decapod

2\) Add some images to be imported

3\) Add some more images to be imported.\
Notice that the status message above the "Add More" button didn't update after adding files the second time.

        