---json
{
  "title": "KETTLE-10",
  "summary": "Update Kettle's JSGI support to conform to version 0.3 of the spec",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-09-14T23:38:14.000-0400",
  "updated": "2014-03-03T14:24:04.105-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The CommonJS group agreed that the response returned by a JSGI "app" should now be an object literal like this:

{\
status: 200\
headers: {}\
content-type: "text/plain"\
body: "foo"\
}

We also need to look into the other changes between JSGI 0.1 and 0.3

        