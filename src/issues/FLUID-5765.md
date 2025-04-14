---json
{
  "title": "FLUID-5765",
  "summary": "Remove \"autoInit\" from component definitions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2015-09-15T09:56:26.069-0400",
  "updated": "2016-07-08T09:02:17.758-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-09-15T11:10:53.188-0400",
      "body": "Issued a pull request: <https://github.com/fluid-project/infusion/pull/636>\n"
    }
  ]
}
---
Searching thru the infusion master branch, the use of "autoInit" appears at a few places. According to the migration document - <http://docs.fluidproject.org/infusion/development/APIChangesFrom1_5To2_0.html>, "autoInit" is now the default for every component, so it should be removed from those places.

        