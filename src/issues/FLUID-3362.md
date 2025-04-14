---json
{
  "title": "FLUID-3362",
  "summary": "Test cases for properties file parsing have rotted",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2009-11-05T14:08:09.000-0500",
  "updated": "2009-11-13T09:19:29.000-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-11-05T14:21:09.000-0500",
      "body": "Reordered the test cases to issue the test from inside the fetch callback. It is unclear why this used to work before - when did we update the testing framework that might have changed this behaviour?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T09:19:29.000-0500",
      "body": "tests seem to be passing\n"
    }
  ]
}
---
The test cases for parsing Java-style properties file parsing have rotted in that they are no longer being invoked. This may be because of drift in support of the underlying testing framework for asynchonously (that is, not on the same stack frame as the issuing of the "test" call) issued testing assertions. The final test shown from "Renderer Tests" should be "Properties file parsing".

        