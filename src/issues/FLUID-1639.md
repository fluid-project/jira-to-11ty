---json
{
  "title": "FLUID-1639",
  "summary": "Manual test files need to be updated to latest APIs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2008-09-30T09:54:27.000-0400",
  "updated": "2008-09-30T11:09:38.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-30T10:42:53.000-0400",
      "body": "The multi-reorderer issue is fixed. \\\nA new issue, <https://fluidproject.atlassian.net/browse/FLUID-1640#icft=FLUID-1640> has been created for the menubar issue.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-30T10:54:50.000-0400",
      "body": "I've reviewed Michelle's fix to the multi-reorderer - it looks good.\n\nThe menu bar issue is too complicated for release day. See <https://fluidproject.atlassian.net/browse/FLUID-1640#icft=FLUID-1640>.\n"
    }
  ]
}
---
Some of the manual test files have not been kept up to date with the recent changes in the APIs. They include:

tests/fluid-tests/manual/multi-reorderers/multi.html\
tests/jquery-tests/manual/menubar/MenuBarExample.html

        