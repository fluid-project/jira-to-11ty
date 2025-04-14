---json
{
  "title": "DECA-323",
  "summary": "Genpdf should report if it fellback to a different PDF generation",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2012-09-07T15:04:32.738-0400",
  "updated": "2012-12-03T10:50:12.504-0500",
  "versions": [],
  "fixVersions": [
    "Future"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Genpdf should report if it was unsuccessful at generating a given PDF and report which kind of PDF was generated instead.

A possible way to do this is instead of the final "Done" status in the JSON file, perhaps the last status be the type of PDF that was generated.

i.e. If generating a Type 4 and the final status is "Type 1", then we know that it failed at Type 4 generation and fell back to Type 1.

        