---json
{
  "title": "FLUID-4163",
  "summary": "Unit tests to cover HTML5 remote functionality",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Mike Lam",
  "date": "2011-03-29T12:05:50.782-0400",
  "updated": "2011-05-12T10:46:04.931-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4167/",
      "key": "FLUID-4167"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-05-12T10:46:00.688-0400",
      "body": "Reviewed and committed\n"
    }
  ]
}
---
The HTML5 strategy is missing a lot of unit tests, specifically tests for the remote implementation.   Mocking XHR objects will ensure the remote process is properly working.   We want to ensure that the model is updated and that the sequence of events are fired correctly.

        