---json
{
  "title": "KETTLE-61",
  "summary": "Create a client-side implementation of kettle.dataSource.URL...",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-07-03T10:05:53.461-0400",
  "updated": "2020-09-30T12:15:29.096-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/KETTLE-55/",
      "key": "KETTLE-55",
      "summary": "Refactor dataSource away from clumsy getImpl/setImpl pattern towards symmetric implementation using pseudoevents"
    }
  ],
  "attachments": [],
  "comments": []
}
---
As @@Antranig Basman and others have often discussed, there is a need to have a client-side equivalent of kettle.dataSource.URL.  I have a starting point for this work that I would like to submit as a PR against Kettle.

My idea is that this would be  a "work alike" backed by [jQuery.ajax](http://api.jquery.com/jquery.ajax/).  Wherever possible, it should support [the options supported by the node-based component](https://github.com/fluid-project/kettle/blob/master/docs/DataSources.md#configuration-options-accepted-by-kettledatasourceurl).  The raw options would be expanded and/or transformed and then used to populated a set of options that can be passed directly to jQuery.ajax.  Advanced usages of the client-side grade could override and pass options directly to jQuery.ajax.

As part of this, I would need to add browser tests.  If there are no objections, I thought I would follow the same pattern used with the recently-merged universal PR, i.e. gpii-testem for browser tests, nyc or istanbul for the node code, and a combined coverage report.

My new approach is a first attempt at addressing KETTLE-55 at least for the client-side grade.  We should review the initial work and discuss whether we want to tackle KETTLE-55 for the node-side grades first.

cc: @@Antranig Basman

        