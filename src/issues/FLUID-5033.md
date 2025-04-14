---json
{
  "title": "FLUID-5033",
  "summary": "Allow component default options to be reloaded, including throughout a grade hierarchy",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2013-06-03T23:14:34.984-0400",
  "updated": "2014-03-03T11:49:14.457-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-06-30T01:40:10.563-0400",
      "body": "Merged into trunk at revision ba09d84\n"
    }
  ]
}
---
In conjunction with <https://fluidproject.atlassian.net/browse/FLUID-5032#icft=FLUID-5032>, it would be useful to be able to dynamically reload component defaults, especially for in-development scenarios or "live coding" situations. Right now for efficiency reasons, we have been cashing component default options on registration - this has been in place since late 2011 as part of a performance review in CollectionSpace - this caching was described in <https://fluidproject.atlassian.net/browse/FLUID-4563#icft=FLUID-4563>. Getting the benefits of both dynamism as well as caching creates a more complex tradeoff, but it should be possible to implement a solution which allows re-issuance of component defaults without punishing regular users of cached defaults too much.

An ultimately iterated implementation of this functionality would allow for dynamic reloading of particular component instances which could be determined to be affected by changed defaults. This is a more ambitious work package outside the scope of this JIRA.

        