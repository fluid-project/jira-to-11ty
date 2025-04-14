---json
{
  "title": "FLUID-6436",
  "summary": "SelfVoicing Enactor test and Orator tests both failing due to Orator in IE 11",
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
  "reporter": "Justin Obara",
  "date": "2019-11-26T09:39:39.285-0500",
  "updated": "2024-07-22T10:35:19.456-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
While the Orator component is not actually supported in IE 11, due to lack of support for the web speech API, there are still tests that are capable of being run in IE 11 and should not throw errors if they are run.

The selfVoicing enactor tests are failing due to a use of parentElement, which should all be changed to use parentNode.

The Orator tests themselves are failing on "fluid.orator.selectionReader.parseRange - text node selected" because the language code is not located correctly.

        