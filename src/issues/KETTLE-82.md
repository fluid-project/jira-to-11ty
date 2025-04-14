---json
{
  "title": "KETTLE-82",
  "summary": "Client request abort can cause server to exit",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-04-08T14:56:45.559-0400",
  "updated": "2020-04-10T09:01:25.422-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Reported as <https://issues.fluidproject.org/browse/SJRK-187> (now deleted) and also as <https://issues.fluidproject.org/browse/SJRK-322> . The unmarking route in kettle.markActiveRequest treats the request already having disposed as a top-level error, which in the default uncaught exception handler configuration will exit the server. This is a design fault, since the request may perfectly legitimately have concluded in error if the client requested an abort before the I/O is serviced. The Kettle idiom is that any error scoped to a request terminates that request, but any error not scoped to any request is a top-level failure, representing a design error in the application - by default node process semantics, such an assertion failure terminates the process.

        