---json
{
  "title": "FLOE-303",
  "summary": "Implement a simplified sticky keys assessment component",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-04-17T12:58:48.607-0400",
  "updated": "2015-11-03T11:31:09.840-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-04-20T15:55:05.491-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/32>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-04-22T09:48:46.992-0400",
      "body": "Merged into the project master branch @ 7b258ae39378254baa4cc6d124e01d043443797c\n"
    }
  ]
}
---
Implement a component that will be used to perform the assessment for whether or not a user should be offered the sticky keys adjuster.

A simplified version of the assessment will behave like the following:

It will check it's model value, if it is anything other than an "@" it will fail.&#x20;

In terms of implementation, this should be setup via model relay to the input component. On a failure, it should trigger the parent component to offer assistance.

        