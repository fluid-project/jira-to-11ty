---json
{
  "title": "FLUID-5872",
  "summary": "Tooltip tests do not compete in Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2016-03-09T10:06:46.250-0500",
  "updated": "2016-08-15T16:18:36.899-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Tooltip"
  ],
  "environment": "Safari 9 (Mac OS 10.11)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-03-09T10:07:19.192-0500",
      "body": "I have noticed these tests failing in the all-tests on occasion in IE 11 and Chrome as well, but Safari always fails.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-08-15T16:18:32.460-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/736> has been merged into the master branch at da88fd7b88f4a60ab9a4f352fe1edbe2973afe10\n"
    }
  ]
}
---
The "FLUID-5846 tooltip in iframe tests: <https://fluidproject.atlassian.net/browse/FLUID-5846#icft=FLUID-5846> sequence" tests timeout when run in safari. This is both the case when run separately or as part of the all-tests.

<http://localhost:7888/infusion/tests/component-tests/tooltip/html/Tooltip-test.html?testNumber=10>

        