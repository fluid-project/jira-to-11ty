---json
{
  "title": "FLUID-6755",
  "summary": "Update to latest linting...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Tony Atkins",
  "date": "2022-11-18T08:19:15.023-0500",
  "updated": "2024-07-22T10:35:14.016-0400",
  "versions": [
    "4.5"
  ],
  "fixVersions": [
    "4.6"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In testing updates to fluid-lint-all, Justin and I discovered that Infusion main has linting errors that are reported by any version of fluid-lint-all newer than what is currently used.

        