---json
{
  "title": "INFRA-135",
  "summary": "Timeout stalled buildkite jobs",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Avtar Gill",
  "reporter": "Justin Obara",
  "date": "2018-03-07T14:38:03.300-0500",
  "updated": "2018-03-28T13:07:15.391-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Avtar Gill",
      "date": "2018-03-07T16:23:13.249-0500",
      "body": "I'm aiming to make a PR for this next week. For reference there's a way to create a global timeout using the Buildkite web UI but we're using pipeline configs:\n\n<https://github.com/buildkite/feedback/issues/170>\n\nThe workaround will be to add `timeout_in_minutes` to [each step](https://github.com/fluid-project/infusion/blob/master/.buildkite/pipeline.yml).\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-28T13:07:15.388-0400",
      "body": "Avtar submitted [PR#884](https://github.com/fluid-project/infusion/pull/884) which added timeouts.\n"
    }
  ]
}
---
Recently I submitted updates to a PR that failed to complete their buildkite steps. 

<https://buildkite.com/fluid-project/fluid-infusion/builds/65> \
<https://buildkite.com/fluid-project/fluid-infusion/builds/67>

It seems that this was related to a missing dependency in one of the test files. However, showcased an issue with the current setup where a stalled buildkite job will block all other buildkite operations.

        