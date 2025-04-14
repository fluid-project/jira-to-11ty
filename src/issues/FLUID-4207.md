---json
{
  "title": "FLUID-4207",
  "summary": "Modify UI Enhancer to use the current framework feature",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Cindy Li",
  "date": "2011-05-06T13:41:38.185-0400",
  "updated": "2011-07-08T16:16:56.883-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4320/",
      "key": "FLUID-4320",
      "summary": "Refactor TextSizer and LineSpacer to remove repeated code"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-05-09T13:07:16.365-0400",
      "body": "Changes are done at commit code: 282ff955ee98a85b63b102852352e3c68d06407b\n\nSent the pull request. Waiting for code review.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:08:31.951-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-07T16:09:17.919-0400",
      "body": "Based on code review on June 7th, the UI Enhancer should be made auto init and several function should be moved into a public namespace.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-21T13:54:04.664-0400",
      "body": "Colin will review the pull request: <https://github.com/fluid-project/infusion/pull/79>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-07T15:55:09.151-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/93> merged into project repo at f2422a49c04f6c4dcf25ab6132f176be9f5d522d&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-07T15:57:24.197-0400",
      "body": "Remaining tasks from code review are encapsulated in <https://fluidproject.atlassian.net/browse/FLUID-4320#icft=FLUID-4320>\n"
    }
  ]
}
---
UI Enhancer should make use of the framework features of&#x20;

1\. IoC / sub-components \
2\. Change applier

As a result, UI Options needs to be adjusted accordingly to collaborate with the re-factored UIEnhancer.

        