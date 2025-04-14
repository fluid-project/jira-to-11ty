---json
{
  "title": "FLUID-3007",
  "summary": "postProcessor.php should not rely on global variables for operation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-07-07T14:20:01.000-0400",
  "updated": "2009-08-24T11:22:41.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-07-07T14:20:38.000-0400",
      "body": "Colin commented: In postProcessor.php, I notice that you define $minified and $includes as global variables. How come? If it's necessary, is there a way you can define a class instead that will store this state and the methods that depend on it without requiring globals?\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-07-13T10:38:23.000-0400",
      "body": "Completed this task.\n"
    }
  ]
}
---

        