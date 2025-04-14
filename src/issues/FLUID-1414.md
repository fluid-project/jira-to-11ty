---json
{
  "title": "FLUID-1414",
  "summary": "OSDPL Functionality: Implement content status indicators",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-09-03T10:27:36.000-0400",
  "updated": "2008-10-14T13:53:33.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1416/",
      "key": "FLUID-1416"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-09-03T10:27:46.000-0400",
      "body": "Iteration19\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-02T22:42:02.000-0400",
      "body": "Public / not public is going to be handled by published / unpublished states built in Drupal.\n"
    }
  ]
}
---
Implement a scheme that allows design patterns to have various states:

* Status for completeness: complete / in progress.
* Status for viewability: public / not public.
* Users of a certain profile should be allowed / restricted from viewing "not public" patterns

Allow these states to be easily settable by the pattern author and reviewers.

        