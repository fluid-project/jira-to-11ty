---json
{
  "title": "FLUID-3039",
  "summary": "Ajax tests don't show the correct number of passed and failed tests.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2009-07-15T16:16:55.000-0400",
  "updated": "2011-03-17T15:06:05.298-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-07-16T11:52:44.000-0400",
      "body": "The fix involved using QUnit's 'stop' and 'start' functions.&#x20;\n"
    }
  ]
}
---
Tests such as UIOptions which do ajax calls during or before the test do not show the correct number of pass and fails. UI Options, for example, shows this:

0 tests of 0 failed.

We should move to using QUnit's 'stop' and 'start' functions when doing AJAX in tests.&#x20;

        