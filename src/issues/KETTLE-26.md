---json
{
  "title": "KETTLE-26",
  "summary": "Kettle error handler is only capable of sending 500 status codes",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-12-16T13:26:04.597-0500",
  "updated": "2015-08-26T20:40:57.908-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-26T20:40:57.905-0400",
      "body": "Merged into trunk at revision e79bb81196df68c97eaa9f96c485a4321b69af7 (21 Dec 2014)\n"
    }
  ]
}
---
We need to improve Kettle's error handling pathways to interpret the object sent as argument to the onError request as a source for different status codes, e.g. 401 representing an unauthorized request. Right now it is hard-wired to always send the 500 status code. This is required for work on the OAuth2-secured cloud-based flow manager.

        