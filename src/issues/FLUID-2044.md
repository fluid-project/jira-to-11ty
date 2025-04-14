---json
{
  "title": "FLUID-2044",
  "summary": "Add \"Stop Upload\" and \"Cancel Remaining Uploads\" Workflow",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Daphne Ogle",
  "date": "2008-12-23T20:21:25.000-0500",
  "updated": "2011-01-05T15:48:23.501-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-01-05T15:48:23.499-0500",
      "body": "Stop upload button has been implemented.  See latest Infusion 1.3 release.&#x20;\n"
    }
  ]
}
---
Uploader Storycard 5:  Add "Stop Upload" and "Cancel Remaining Uploads" Workflow

Details:

* Once upload is in progress, change "Upload" button to "Stop Upload"
* "Stop Upload" stops the upload and gives the user 2 new buttons:  "Cancel Remaining Uploads" and "Resume"
* "Resume" continues with the upload
* "Cancel Remaining Uploads" gives user a message about what happened with a "Done" button at the bottom they need to accept.  They will need to choose done to close out of uploader.

Relevant storyboard:  <http://wiki.fluidproject.org/display/fluid/Uploader+Storyboard+-+Upload+and+Cancel>

        