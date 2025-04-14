---json
{
  "title": "FLOE-255",
  "summary": "Implement a new textSize panel for the First Discovery Tool",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-02-02T15:59:53.327-0500",
  "updated": "2015-11-03T10:58:57.061-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-02-05T10:18:38.520-0500",
      "body": "Filed a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/6>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-02-05T13:02:23.649-0500",
      "body": "Merged into the master branch @ 640299c5a3d78f3c5d166d2f440c587817bef5ab\n"
    }
  ]
}
---
The existing textSize panel from the fluid prefsFramework is based around a textfield slider. However, the textSize adjuster used by the First Discovery Tool will contain increment and decrement buttons and will be accompanied by a progress bar to indicate the selection level.

See: <http://wiki.fluidproject.org/download/attachments/40797428/First%20Discovery%20January%2029%2015%20small.pdf?version=3&modificationDate=1422562147657&api=v2>

        