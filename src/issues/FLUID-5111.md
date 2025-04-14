---json
{
  "title": "FLUID-5111",
  "summary": "Remove tabs from UIOptions dependencies",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2013-08-08T16:10:39.616-0400",
  "updated": "2013-10-08T13:39:26.060-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5161/",
      "key": "FLUID-5161"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-04T13:00:09.588-0400",
      "body": "Fixing with work for <https://fluidproject.atlassian.net/browse/FLUID-5161#icft=FLUID-5161>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-08T13:39:26.058-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/414> ) into the project repo at b4422d732612a84ba429f3866b97786e627d8fb1\n"
    }
  ]
}
---
UI Options no longer uses jQuery tabs. We should remove the dependencies on "tabs" and "jQueryAriaTabsPlugin" from the dependencies file.

        