---json
{
  "title": "FLUID-4974",
  "summary": "Wire up Reset button on panel bar",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2013-04-10T10:12:54.837-0400",
  "updated": "2013-04-29T09:30:43.555-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4970/",
      "key": "FLUID-4970",
      "summary": "Merge the new UIO demo styling into the master branch"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4927/",
      "key": "FLUID-4927",
      "summary": "Create presentation ants for each of the UIO settings"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-04-12T09:13:00.444-0400",
      "body": "resolved in the <https://fluidproject.atlassian.net/browse/FLUID-4927#icft=FLUID-4927> branch\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-04-29T09:30:43.500-0400",
      "body": "The fix was merged in with the pull request for <https://fluidproject.atlassian.net/browse/FLUID-4927#icft=FLUID-4927>\n"
    }
  ]
}
---
The reset button has been moved from inside the fatpanel iframe to the panel bar. The styling for this has been done in 4970, but it needs to be hooked up in the js so it's functional.

        