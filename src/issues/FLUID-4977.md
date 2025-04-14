---json
{
  "title": "FLUID-4977",
  "summary": "Remove 'A' from contrast radio button label",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kaye Mao",
  "reporter": "heidi valles",
  "date": "2013-04-11T15:32:46.557-0400",
  "updated": "2015-07-13T10:57:48.396-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Kaye Mao",
      "date": "2015-06-24T14:52:09.821-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/615>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-07-13T10:57:44.410-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/615> ) into the project repo at 4c2ba7903a0543fdc0f78edc79fd436ef4bee0ae\n"
    }
  ]
}
---
Right now the presentational 'A' on the theme labels gets read out by a screen reader.

ex. ADefault, ABlack on White

Remove the A out of the label, restyle.

        