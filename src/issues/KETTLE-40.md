---json
{
  "title": "KETTLE-40",
  "summary": "Update CouchDB dataSource to allow more control over read/write payloads...",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2016-02-29T09:29:20.893-0500",
  "updated": "2016-05-25T18:56:49.857-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-02-29T10:06:37.178-0500",
      "body": "<https://github.com/amb26/kettle/pull/1>\n"
    }
  ]
}
---
The current implementation of `kettle.dataSource.CouchDB` inserts all model data into a "value" element before writing it, and expects to read a data payload from a similar "value" element.  See:

<https://github.com/amb26/kettle/blob/KETTLE-32/lib/dataSource.js#L510>\
<https://github.com/amb26/kettle/blob/KETTLE-32/lib/dataSource.js#L518>

This is to avoid confusion with built-in fields like `_id` and `_rev`, but limits the reuse of this grade, in that it can only ever work with CouchDB records that follow this convention.

I propose wrapping both the read and write "payloads" in a call to `fluid.model.transformWithRules`, as we have done in other contexts.  This mechanism would allow the wrapper to be modified using declarative options.

I will add default rules to preserve the current behavior, so that no change to existing code is required.

I will also add documentation (in the form of comments) for the new rules that can be used to control the format.

        