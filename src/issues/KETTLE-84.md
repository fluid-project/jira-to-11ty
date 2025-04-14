---json
{
  "title": "KETTLE-84",
  "summary": "Add onclose event to kettle.test.request.ws",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Philip Tchernavskij",
  "reporter": "Philip Tchernavskij",
  "date": "2020-05-25T17:55:07.602-0400",
  "updated": "2020-06-09T16:14:47.360-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
kettle.test.request.ws is a wrapper for the ws library's WebSocket object. It currently does not wrap the onclose event, which enables clients to listen and react to the WebSocket being closed by the server. The wrapper grade should be extended with an onClose event.

        