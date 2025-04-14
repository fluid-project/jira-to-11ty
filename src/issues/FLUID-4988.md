---json
{
  "title": "FLUID-4988",
  "summary": "Improve i18n for User Interface Options.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2013-04-26T11:42:32.506-0400",
  "updated": "2013-09-06T13:01:28.061-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "All\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-05-31T16:33:33.689-0400",
      "body": "Merged into project repo at b3c1daec014c368a679b04429b90609c61739d3f\n"
    }
  ]
}
---
Currently user strings are scattered across components and various HTML templates.

All of the i18n strings should be centralized in one place. This will let implementers and users easily modify and internationalize all of UIOptions.

Here's some documentation regarding the current state of UIOptions i18n:\
<http://wiki.fluidproject.org/display/Infusion14/Internationalizing+User+Interface+Options>

        