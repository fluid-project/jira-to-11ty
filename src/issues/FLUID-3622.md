---json
{
  "title": "FLUID-3622",
  "summary": "If Javascript is turned off, page reloads on uploader cause an HTTP 412 for Chrome 4",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "James Yoon",
  "date": "2010-04-09T15:11:09.000-0400",
  "updated": "2010-04-09T15:51:02.000-0400",
  "versions": [
    "1.2beta1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Chrome 4 / XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-04-09T15:51:02.000-0400",
      "body": "Could not reproduce.\n"
    }
  ]
}
---
Every second refresh causes an error. Error message is as follows:

HTTP Status 412 -

type Status report

message

description A specified precondition has failed for this request ().

Apache Tomcat/5.5.25

        