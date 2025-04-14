---json
{
  "title": "KETTLE-83",
  "summary": "An Exception thrown inside a callback created with kettle.wrapCallback() will terminate the application",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Simon Bates",
  "date": "2020-04-09T10:45:15.749-0400",
  "updated": "2020-04-09T11:30:39.238-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
With the default Kettle and Infusion error handling configuration, an Exception thrown inside a synchronous request handler will be caught by Kettle and the Exception information is returned in the response for the request. However, an Exception thrown inside a callback created with `kettle.wrapCallback()` will not be caught and will terminate the application.

This may also affect users of `kettle.withRequest()`, but I have only verified it against `kettle.wrapCallback()`.

Example code: <https://github.com/simonbates/kettle-exception-examples>

        