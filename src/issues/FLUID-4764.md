---json
{
  "title": "FLUID-4764",
  "summary": "Dropdown inline editor: when navigating the list of options with a keyboard, choices do not wrap.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "y z",
  "date": "2012-08-15T15:32:40.003-0400",
  "updated": "2012-08-15T15:33:26.899-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Google Chrome, WIN XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Whenever a user tries to navigate with a keyboard through a list of choices I think it is expected that once the end of the dropdown is reached the next press on down will wrap and result in focus shift to the first element in the list.

        