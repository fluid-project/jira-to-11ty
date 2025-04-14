---json
{
  "title": "FLUID-4328",
  "summary": "UIO: fix store unit tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2011-07-07T14:22:42.507-0400",
  "updated": "2011-07-07T15:19:05.790-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-07T15:19:05.785-0400",
      "body": "Merged pull request <https://github.com/fluid-project/infusion/pull/102> into project repo at a7d77f8f69ea19ec2b8791eeada176c8555025b5\n"
    }
  ]
}
---
To produce,

1\. run any ui options demos, adjust settings and save. This is to have at least one the ui options cookie saved by the browser;\
2\. run src/webapp/tests/component-tests/uiOptions/html/Store-test.html;\
3\. the 4th test (Our cookie should contain the textSize 2) in the first set of tests fails.

        