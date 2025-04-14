---json
{
  "title": "SJRK-169",
  "summary": "Storytelling Tool is not running properly",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2018-12-18T16:12:32.276-0500",
  "updated": "2018-12-18T16:36:37.314-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-12-18T16:36:30.615-0500",
      "body": "Work complete, merged into <https://fluidproject.atlassian.net/browse/SJRK-91#icft=SJRK-91>\n"
    }
  ]
}
---
The current latest 'stable' version of the storytelling tool at <https://github.com/BlueSlug/sjrk-story-telling/commit/531f0bbada4f1c2bc1beebc3c38b25bc5f8d2ed3> is not working properly. This is due to the package.json file referring to gpii-handlebars version 1.1.0, which introduced a breaking change from 1.0.3 (bad semver!), and Gregor not updating his node\_modules folder on his particular work machine, thereby allowing the issue to go unnoticed until others tried to run the project locally. Thanks to @@Sepideh Shahi and @@Justin Obara for help with investigating this.

Fix this issue and any others that arise as a result.

        