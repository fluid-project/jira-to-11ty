---json
{
  "title": "SJRK-64",
  "summary": "Move retry logic for configuring database from server project to couch-config project",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2018-03-27T14:15:34.231-0400",
  "updated": "2019-11-18T14:30:34.677-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-04-16T15:45:20.864-0400",
      "body": "An initial implementation of this is now done, at <https://github.com/waharnum/fluid-couch-config/tree/SJRK-64,> based off Gregor Moss's <https://fluidproject.atlassian.net/browse/SJRK-41#icft=SJRK-41> branch (which is the subject of this open PR: <https://github.com/fluid-project/fluid-couch-config/pull/2)>\n\nGregor Moss, do you think it makes sense for me to PR this against your <https://fluidproject.atlassian.net/browse/SJRK-41#icft=SJRK-41> branch?\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2018-04-16T15:52:17.151-0400",
      "body": "Correction, the branch is <https://fluidproject.atlassian.net/browse/SJRK-41#icft=SJRK-41>, but this is based off the current master (since that's what being PR'd and it's ahead of <https://fluidproject.atlassian.net/browse/SJRK-41#icft=SJRK-41> development-wise)\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-04-16T15:55:42.277-0400",
      "body": "Alan Harnum your <https://fluidproject.atlassian.net/browse/SJRK-64#icft=SJRK-64> branch is based off of my master branch, in fact, so I think that it would be best to have a PR against BlueSlug:master. once merged, it will update my PR against fluid-project:master. TLDR: yes 🙂\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-11-18T14:30:34.663-0500",
      "body": "Alan Harnum's work has been merged into my master branch (<https://github.com/BlueSlug/fluid-couch-config>), so we can leave any substantial review of this for the review of the <https://fluidproject.atlassian.net/browse/SJRK-41#icft=SJRK-41> pull request: <https://github.com/fluid-project/fluid-couch-config/pull/2>\n"
    }
  ]
}
---
As part of the initial work to create a fully containerized definition of the application + dependencies, some basic retry logic was implemented in the storytelling server project's couch configuration grade (<https://github.com/waharnum/sjrk-story-telling-server/blob/SJRK-60/src/js/dbSetup.js#L102)> - this allows the configuration to be resilient when dealing with the potential sequencing issues that arise when spinning up various containers, including ones responsible for operations like database configuration. (see <https://docs.docker.com/compose/startup-order/)>

As this is generally useful functionality it should be moved from the server project to the couch-config project, with attendant test coverage.

        