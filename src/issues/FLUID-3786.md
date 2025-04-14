---json
{
  "title": "FLUID-3786",
  "summary": "The edit mode tooltip should be displayed on focus",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-10-07T13:24:17.188-0400",
  "updated": "2010-12-01T16:59:54.420-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3786/keyboardTooltip.txt",
      "filename": "keyboardTooltip.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3786/keyboardTooltipPart2.txt",
      "filename": "keyboardTooltipPart2.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-07T13:24:46.970-0400",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-10-15T14:34:12.454-0400",
      "body": "Edit field focus will trigger edit mode tooltip to display.  No mouseover focus in edit mode. &#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-10-15T15:52:42.242-0400",
      "body": "Code cleanup and refactoring.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-15T16:27:19.426-0400",
      "body": "Committed Mike's patch ( keyboardTooltipPart2.txt ) which added in the edit mode tooltip on focus.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-01T16:59:54.409-0500",
      "body": "I code reviewed this with a whole group of Inline Edit JIRA issues for 1.3 and it is fine.&#x20;\n"
    }
  ]
}
---
Currently the tooltip is only being displayed on hover, which means that keyboard only users will not benefit from the instructions on how to exit edit mode.

        