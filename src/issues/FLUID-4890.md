---json
{
  "title": "FLUID-4890",
  "summary": "Firing an event to a listener registered by a destroyed component should trigger an error immediately",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2013-01-16T14:57:30.162-0500",
  "updated": "2019-08-01T09:30:58.612-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5499/",
      "key": "FLUID-5499"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5578/",
      "key": "FLUID-5578"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5332/",
      "key": "FLUID-5332"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5790/",
      "key": "FLUID-5790"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-12-09T08:35:05.797-0500",
      "body": "More conversation on the pull request\\\n<https://github.com/fluid-project/infusion/pull/443>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-05-13T13:56:30.096-0400",
      "body": "Merged into project repo at f5403d5027923475e0c4314005f6723d2e732759\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2019-08-01T09:30:58.612-0400",
      "body": "Note that we now by policy implement a different behaviour - any component action triggered after destruction, e.g. an invoker or listener call, is now a no-op\n"
    }
  ]
}
---
During our authoring call about FLUID-4884, Yura suggested that an important and confusing source of errors was caused by listeners registered with "zombie components" that have already been destroyed. After a component's onDestroy has fired, there should be a hard and immediate error triggered by any listener notifying it, in order to make debugging this kind of issue as clear and direct as possible

        