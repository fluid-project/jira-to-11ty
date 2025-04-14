---json
{
  "title": "SJRK-398",
  "summary": "Update Node to 14",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-10-06T13:51:58.314-0400",
  "updated": "2020-10-07T14:32:36.858-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-10-07T14:32:36.855-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/sjrk-story-telling/pull/96> ) into the project repo at 5a450500298599d85ee111767422a3e4daee88a8\n"
    }
  ]
}
---
The Dockerfile currently specifies Node 10.22.1, which will be [moving out of LTS in April 2021](https://nodejs.org/en/about/releases/). As Node 14 will be entering LTS in late October 2020, it makes sense to update to 14 rather than 12, which is the current LTS at time of filing.

This task involves ensuring the site runs properly in a Node 14 development environment as well as with a Node 14 based Docker image & server environment.

        