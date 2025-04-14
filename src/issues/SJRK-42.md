---json
{
  "title": "SJRK-42",
  "summary": "Move grunt-couch-config repository to fluid-project",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Reopened",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2017-11-07T16:27:29.524-0500",
  "updated": "2020-11-04T14:15:37.797-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-78/",
      "key": "SJRK-78",
      "summary": "Add Code of Conduct and Contributor Guidelines to couch-config Grunt project"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2017-11-07T17:12:35.818-0500",
      "body": "An upstream organizational repo has been created: <https://github.com/fluid-project/fluid-grunt-couch-config>\n\nFork which will be filled with original repo content: <https://github.com/BlueSlug/fluid-grunt-couch-config>\n\nTo do:\n\n* wait for couch-config to be reviewed and merged\n* make adjustments to original code to reflect any changes made\n* remove references to SJRK namespace\n* run tests and ensure it still works\n* make a PR and merge into new repo\n"
    }
  ]
}
---
Relocate grunt-couch-config code repository from private GitHub account to fluid-project:

<https://github.com/BlueSlug/grunt-sjrk-couch-config>

        