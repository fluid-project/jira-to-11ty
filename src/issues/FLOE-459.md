---json
{
  "title": "FLOE-459",
  "summary": "Implement preference adjustment tracking + reflection",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-06-13T10:27:05.217-0400",
  "updated": "2018-05-08T15:01:08.957-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Learning Dashboard"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-05-08T15:01:08.955-0400",
      "body": "Closing since new work in starting on this project, being captured in <https://issues.fluidproject.org/projects/MYL3/issues/?filter=allopenissues>\n"
    }
  ]
}
---
The dashboard should allow the user to:

* track the adjustment of their preferences
* reflect on the adjustment of their preferences with an assortment of open and closed questions (per the design)
* if the user says "Yes", they receive the prompts to reflect (checkboxes + free text question)
* if the user says "No", they do not receive the prompts to reflect
* longer term, a user can opt-in to tracking various things (typing speed, navigation, etc) from a preference change

For the initial prototype we'll demonstrate this by:

* implementing UIO on the Dashboard
* tracking changes made to preferences in UIO and generating appropriate journal entries from them

We should also track the source of a preference change such as:

* direct user interaction
* resets

        