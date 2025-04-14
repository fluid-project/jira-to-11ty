---json
{
  "title": "DECA-135",
  "summary": "The /calibration service should provide basic persistence and defaults for the camera calibration model",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-07-14T00:06:15.574-0400",
  "updated": "2012-01-10T09:39:23.077-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Calibration",
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-07-14T11:15:47.170-0400",
      "body": "Bug Parade Decapod 0.4\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-15T19:27:54.177-0400",
      "body": "For the 0.4, we are persisting the calibration model in memory. Clients can GET the model as JSON and POST changes.\n"
    }
  ]
}
---
To support left/right independent calibration, we need to extend the server to do the following:

1\. Provide a default camera calibration model\
2\. Save changes to this calibration model when the client POSTs\
3\. Provide the model in JSON when the client GETs&#x20;

        