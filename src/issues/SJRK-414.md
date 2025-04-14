---json
{
  "title": "SJRK-414",
  "summary": "Improve Infusion calls to changeApplier",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-10-23T02:28:10.718-0400",
  "updated": "2020-10-23T02:28:49.208-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Update & improve all Infusion calls to a component's changeApplier to use the "changePath" option instead of directly calling "that.applier.change".

Documentation of that feature outlines the correct usage: <https://docs.fluidproject.org/infusion/development/ChangeApplierAPI.html#example-of-declarative-triggering-of-changes>

        