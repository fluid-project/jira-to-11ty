---json
{
  "title": "FLUID-4145",
  "summary": "Create functional examples for use in documentation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2011-03-15T15:02:29.575-0400",
  "updated": "2024-07-31T07:19:59.706-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-14T14:42:44.848-0400",
      "body": "Some of these have been created for UIO, Renderer, FSS. More needed, as well as the infrastructure to properly embed them in the docs: currently, we're using an iframe. We need a component that will modify the page, injecting the required headers, etc.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-31T16:00:29.357-0400",
      "body": "We now (post-1.5) have an \"examples\" folder where these examples will go.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-09T13:16:19.365-0400",
      "body": "@@Anastasia Cheetham should we close this jira and make specific jiras for examples that are needed?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-31T07:19:59.706-0400",
      "body": "I’m closing this issue as some examples have already been created. We should open specific issues as the need arises for new examples.\n"
    }
  ]
}
---
We need small functional demos illustrating how each component option is used. These code snippets will be embedded in the documentation for the components.

        