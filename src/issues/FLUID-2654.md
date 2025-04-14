---json
{
  "title": "FLUID-2654",
  "summary": "Modify the build scripts to automate the process of rewriting the css references in the head of the html files.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-05-08T12:33:46.000-0400",
  "updated": "2009-11-13T09:14:33.000-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Infrastructure",
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-08T18:14:03.000-0400",
      "body": "Created some new functions, tasks, and regular expressions to 1) find the reference to the first css file that is in the single css file and replace the portion after the last instance of \"./\" with name of the single css file 2) remove the remaining refernces to the css files that are in the single css file.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T09:14:33.000-0500",
      "body": "This was completed but other issues (<https://fluidproject.atlassian.net/browse/FLUID-2767#icft=FLUID-2767>) have prevented the css concatenation from actually being used.\n"
    }
  ]
}
---
Modify the build scripts to automate the process of rewriting the css references in the head of the html files.

Similar to <https://fluidproject.atlassian.net/browse/FLUID-2647#icft=FLUID-2647> but for the css instead of the js.

        