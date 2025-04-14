---json
{
  "title": "FLUID-4235",
  "summary": "The global UI Enhancer should store itself in the staticEnvironment so that it can be addressed via IoC",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2011-05-13T18:32:12.778-0400",
  "updated": "2011-06-07T16:22:11.054-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4205/",
      "key": "FLUID-4205",
      "summary": "UI Enhancer attaches itself to container - UI Options assumes \"document'"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-05-13T18:33:33.236-0400",
      "body": "The symptoms Anastasia reports in <https://fluidproject.atlassian.net/browse/FLUID-4205#icft=FLUID-4205> are due to the brittle use of jQuery.data() as an API for discovering the global UI Enhancer.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:40:24.209-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-26T14:03:30.541-0400",
      "body": "Pull request issued: <https://github.com/fluid-project/infusion/pull/55>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-31T15:19:30.391-0400",
      "body": "This was merged into the merge branch <https://fluidproject.atlassian.net/browse/FLUID-4267#icft=FLUID-4267>, at 14633ff7b66ff8b98df9afad96fe2d8d14f2e811\n"
    }
  ]
}
---
At the moment, the UI Enhancer stores itself on its container using jQuery.data(). In order to find the "global UI Enhancer," UI Options looks for it on the Document element.

There are two problems with this:

1\. Anyone who wants to use the global UI Enhancer has to write code to do so\
2\. UI Options needn't be aware of UI Enhancer's container--it's an implementation detail

Instead, the global, page-level UI Enhancer should be stored in the staticEnvironment, where it will be easily addressable via IoC.

        