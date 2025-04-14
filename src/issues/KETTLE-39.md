---json
{
  "title": "KETTLE-39",
  "summary": "Add a new assertion function for verifying an object subset of a JSON response",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Task",
  "priority": "Major",
  "status": "In Progress",
  "assignee": "Simon Bates",
  "reporter": "Simon Bates",
  "date": "2015-12-17T07:15:11.552-0500",
  "updated": "2015-12-20T01:23:52.449-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Make a new function, similar to `kettle.test.assertJSONResponse` in <https://github.com/amb26/kettle/blob/KETTLE-32/lib/test/KettleTestUtils.http.js> but using `jqUnit.assertLeftHand` rather than `jqUnit.assertDeepEq`.

Include:

* tests for the new assertion function
* Documentation for the new function at <https://github.com/simonbates/kettle/tree/KETTLE-39#helper-methods-for-making-assertions-on-oncomplete>

        