---json
{
  "title": "FLUID-3800",
  "summary": "Remove edit mode instructions for Rich Text Inline Edit ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Mike Lam",
  "date": "2010-10-18T13:46:21.141-0400",
  "updated": "2010-12-01T16:59:10.567-0500",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3800/FLUID-3800.txt",
      "filename": "FLUID-3800.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3800/FLUID-3800b.txt",
      "filename": "FLUID-3800b.txt"
    }
  ],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2010-10-18T14:09:01.770-0400",
      "body": "Set default display of keyboard tooltip to false.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-18T14:15:21.336-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-18T15:46:37.749-0400",
      "body": "In regards to the patch <https://fluidproject.atlassian.net/browse/FLUID-3800#icft=FLUID-3800>.txt, I think we may want to make the change in the component rather than just in the demo.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-18T16:56:46.211-0400",
      "body": "Committed Mike's patch ( FLUID-3800b.txt ) which set the default for the integrations to turn off the edit mode tooltip\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-01T16:59:10.561-0500",
      "body": "I code reviewed this with a whole group of Inline Edit JIRA issues for 1.3 and it is fine.&#x20;\n"
    }
  ]
}
---
Edit mode instructions for rich text are displayed below the save/cancel buttons.    Need to be removed.

        