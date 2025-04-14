---json
{
  "title": "DECA-70",
  "summary": "Camera capture not disabled when only one camera attached",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Justin Obara",
  "reporter": "Michelle D'Souza",
  "date": "2010-03-29T14:29:30.000-0400",
  "updated": "2012-05-25T13:35:02.096-0400",
  "versions": [
    "0.3",
    "0.4"
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
      "type": "Dependence",
      "url": "/browse/DECA-101/",
      "key": "DECA-101"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-25T13:34:59.398-0400",
      "body": "The capture work flow has been removed. When capture returns, any new issues should be filed under a new jira.\n"
    }
  ]
}
---
Steps to reproduce:

1\. Attach a single camera that is off and start the decapod server.\
2\. Attempt to take a picture - you will get the camera detection dialog.\
3\. Turn the camera on\
4\. Attempt to take a picture

The camera detection dialog will go away and you will get an error.&#x20;

        