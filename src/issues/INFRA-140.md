---json
{
  "title": "INFRA-140",
  "summary": "Investigate running browsers inside container",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-03-16T11:15:36.254-0400",
  "updated": "2018-06-18T17:13:07.193-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-30T14:19:12.005-0400",
      "body": "All infusion tests pass with Firefox 60 and Chrome 66 in headless mode.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-06-18T17:13:07.189-0400",
      "body": "Investigation is complete.\n\nA new docker image was created: <https://github.com/idi-ops/docker-node-browsers>\n\nAnd a PR for Infusion was submitted: <https://github.com/fluid-project/infusion/pull/909>\n"
    }
  ]
}
---
Investigate what is necessary to run tests inside a Docker container.

* Is it still necessary to run Xvfb? Does it work with all tests?
* Is it Firefox/Chrome headless possible at the moment? Does it pass all tests? Are there any drawbacks?

        