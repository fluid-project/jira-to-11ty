---json
{
  "title": "FLUID-5735",
  "summary": "TextToSpeech tests fail when run as part of the all-tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Justin Obara",
  "date": "2015-08-07T10:19:54.439-0400",
  "updated": "2016-09-02T13:42:21.216-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Self Voicing"
  ],
  "environment": "Chrome\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-08-15T15:30:12.630-0400",
      "body": "Fixed as part of this PR: <https://github.com/fluid-project/infusion/pull/732>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-09-02T13:42:21.213-0400",
      "body": "Closing, resolved by <https://fluidproject.atlassian.net/browse/FLUID-5936#icft=FLUID-5936> merge.\n"
    }
  ]
}
---
This only happens as part of the all-tests run. If the test is run on its own, it will correctly pass with no tests run.

        