---json
{
  "title": "FLUID-5749",
  "summary": "jqUnit's \"assertEquals\" method should be bound to QUnit's \"strictEqual\" and not \"equal\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-08-22T15:01:40.619-0400",
  "updated": "2017-02-27T15:49:18.830-0500",
  "versions": [
    "1.9"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
jqUnit's "assertEquals" and "assertNotEquals" are bound to QUnit's "equal" and "notEqual" which use the JavaScript == and !== operators for comparison. This is against our best practices and is quite unexpected to the test author. Recently I found a passing test which included the following:

prefsEditor.saveCalled = false;\
prefsEditor.applier.change("", bwSkin);\
jqUnit.assertEquals("Model has changed, auto-save changes", 1, prefsEditor.saveCalled);

which was clearly operating under the assumption that "saveCalled" was a boolean, and passing due to sloppy coercion allowing 1 == true. We should fix up jqUnit and all of our tests to ensure that === is used throughout.

        