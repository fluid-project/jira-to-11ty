---json
{
  "title": "FLUID-5700",
  "summary": "Automate panel tests by piping appropriate template html into test file",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kaye Mao",
  "reporter": "Kaye Mao",
  "date": "2015-06-24T16:06:08.453-0400",
  "updated": "2015-11-16T10:35:05.091-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5726/",
      "key": "FLUID-5726",
      "summary": "Automate links controls composite panel test"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Kaye Mao",
      "date": "2015-07-29T10:45:52.167-0400",
      "body": "Pull request: <https://github.com/fluid-project/infusion/pull/618>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-11-16T10:34:56.469-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/618> ) into the project repo at e4e94623a519682a59055930cff3a97610801e87\n"
    }
  ]
}
---
Right now panel tests for preferences framework require manual copy/paste of updated panel template code into panel-tests.html.\
Improve testing process by automatically fetching the required template code into the panel-tests.html

        