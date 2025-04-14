---json
{
  "title": "FLOE-471",
  "summary": "Transfer pouchPersisted and eventInTimeAware grades from Learning Dashboard prototype to new MyL3 repo",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-08-11T12:43:45.055-0400",
  "updated": "2018-05-08T14:59:39.989-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Learning Dashboard"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-455/",
      "key": "FLOE-455",
      "summary": "Implement initial Learning Dashboard prototype"
    },
    {
      "type": "Related to",
      "url": "/browse/FLOE-481/",
      "key": "FLOE-481"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-08-15T10:35:29.901-0400",
      "body": "Pull request at: <https://github.com/fluid-project/myl3/pull/1>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-08-22T13:47:05.081-0400",
      "body": "Per discussion in the PR & elsewhere, I'm going to refactor to use Tony Atkins' recent work: <https://github.com/the-t-in-rtf/gpii-pouchdb/tree/GPII-1897>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-09-15T09:18:50.341-0400",
      "body": "There seems to be substantial overlap between this and <https://issues.gpii.net/browse/GPII-1872> - to that end I've paused work on this for the moment while that issue is investigated further.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2018-05-08T14:59:39.987-0400",
      "body": "Closing since new work in starting on this project, being captured in <https://issues.fluidproject.org/projects/MYL3/issues/?filter=allopenissues>\n"
    }
  ]
}
---
I've created a new Fluid Project repo at <https://github.com/fluid-project/myl3> to hold MyL3-related code.

Some of the code in my prototype repo at <https://github.com/waharnum/learningDashboard/tree/FLOE-455> is in a state to be moved there after review, specifically the grades dealing with persistence and time-tracking.

I'm going to do the following:

* carve off a branch of the prototype repo that only has those grades and their dependencies
* transfer that code to my fork of the My3L repo
* submit a PR for it so it can be reviewed

        