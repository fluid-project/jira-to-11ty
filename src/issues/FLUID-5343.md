---json
{
  "title": "FLUID-5343",
  "summary": "Pager tests are failing with \"JScript object expected\" error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-04-30T09:02:34.117-0400",
  "updated": "2014-05-02T09:03:48.137-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Pager"
  ],
  "environment": "IE 8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-05-01T09:59:15.381-0400",
      "body": "Submitted a pull request: <https://github.com/fluid-project/infusion/pull/506>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-02T09:03:46.051-0400",
      "body": "The pull request ( <https://github.com/fluid-project/infusion/pull/506> ) was merged into the project repo at a80e292a3c2e38e7ee0b3997729c80983c09a7dc\n"
    }
  ]
}
---
All of the pager tests are failing with the error: "Died on test #1 undefined: JScript object expected"

        