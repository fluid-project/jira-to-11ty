---json
{
  "title": "FLUID-5868",
  "summary": "Localize the button text \"reset\" in the preferences framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2016-02-23T15:06:01.932-0500",
  "updated": "2016-03-18T16:08:50.397-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5878/",
      "key": "FLUID-5878"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-03-04T13:06:40.423-0500",
      "body": "Issued a pull request: <https://github.com/fluid-project/infusion/pull/676>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-03-18T16:08:50.397-0400",
      "body": "The pull request is closed as a more proper solution is created at <https://issues.fluidproject.org/browse/FLUID-5878>\n"
    }
  ]
}
---
The button text "reset" is currently hardcoded in the index.html instead of being served from the message json file.

        