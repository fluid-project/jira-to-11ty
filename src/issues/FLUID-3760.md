---json
{
  "title": "FLUID-3760",
  "summary": "If the display text is in the tab order, it can give the inline edit the appearance of not working with the keyboard",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-09-27T17:53:46.690-0400",
  "updated": "2010-12-01T17:01:16.930-0500",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3760/FLUID-3760Patch.txt",
      "filename": "FLUID-3760Patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3760/tabIndexPatchPart2.txt",
      "filename": "tabIndexPatchPart2.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T14:00:36.915-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-10-12T11:24:04.440-0400",
      "body": "Remove the display text from the tab index.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-13T15:57:57.493-0400",
      "body": "Committed Mike's patch ( tabIndexPatchPart2.txt ) which sets the display texts tabindex to -1\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-01T17:01:16.911-0500",
      "body": "I code reviewed this with a whole group of Inline Edit JIRA issues for 1.3 and it is fine.&#x20;\n"
    }
  ]
}
---
If the display text is placed in the tab order, when a user tabs through the page, they may think they are able to access the inline edit field, but they cannot since the keyboard event binding is only on the button.

        