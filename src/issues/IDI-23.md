---json
{
  "title": "IDI-23",
  "summary": "Implement the mailing list sign-up",
  "tags": "IDI",
  "project": {
    "key": "IDI",
    "title": "IDI"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2012-04-28T13:04:53.520-0400",
  "updated": "2014-03-03T11:58:05.642-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-05-02T12:42:49.243-0400",
      "body": "Merged at commit 83cfc727d48474c7fa5ba0aa76bea26c0733a0ff\n"
    }
  ]
}
---
The designs for the mailing list sign-up process require the sign-up to happen in the background (technically), while styling changes happen to the interface. Right now, submitting the for navigates to a new page.

        