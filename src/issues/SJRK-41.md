---json
{
  "title": "SJRK-41",
  "summary": "Move couch-config repository to fluid-project",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Reopened",
  "reporter": "Gregor Moss",
  "date": "2017-11-07T16:26:30.828-0500",
  "updated": "2022-07-29T00:09:39.818-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-77/",
      "key": "SJRK-77",
      "summary": "Add Code of Conduct and Contributor Guidelines to couch-config project"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2017-11-07T16:37:50.946-0500",
      "body": "An upstream organizational repo has been created: <https://github.com/fluid-project/fluid-couch-config>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-11-07T16:48:51.293-0500",
      "body": "Fork with original repo content, ready for PR against upstream organizational repo: <https://github.com/waharnum/fluid-couch-config>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-11-07T16:50:56.750-0500",
      "body": "This could be PR'd and reviewed at any time, since it is independent of other repos being moved.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2017-11-08T19:05:30.990-0500",
      "body": "As part of the relocating, I think it would be best to re-namespace the grades in this repository to indicate its general usability across all projects, i.e. instead of \"sjrk.server.couchConfig\", it would become \"fluid.server.couchConfig\"\n"
    }
  ]
}
---
Relocate couch-config code repository from private GitHub account to fluid-project:

<https://github.com/waharnum/couch-config>

        