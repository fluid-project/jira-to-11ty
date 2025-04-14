---json
{
  "title": "FLUID-4790",
  "summary": "Super Applier should support all features of a normal applier.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2012-09-06T10:08:56.172-0400",
  "updated": "2013-08-22T15:56:36.578-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Data Binder",
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5024/",
      "key": "FLUID-5024",
      "summary": "UIOptions modelRelay needs to support value transformation"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-08-22T15:56:36.568-0400",
      "body": "In the years since we constructed the first vestigial \"superapplier\", our thinking about how to deal with relationships amongst the tree of models, and in general, <https://fluidproject.atlassian.net/browse/FLUID-3674#icft=FLUID-3674> has changed - the original idea of composing a tree of cooperating appliers and models has emerged as just a special case of the requirements of what we now think of as the \"model relay\" system, now mostly described by <https://fluidproject.atlassian.net/browse/FLUID-5024#icft=FLUID-5024> and <https://fluidproject.atlassian.net/browse/FLUID-5045#icft=FLUID-5045>. In this new model, models and appliers are essentially \"isolated\" and connected only by streams of ChangeApplier events, and we intend to cut down on cases where model objects are genuinely shared amongst multiple components (in the style of CSpace).\n\nThis issue is being closed in favour of the ModelRelay issues which cover all the use cases of this JIRA and several more - and in fact we should construct a separate JIRA for the removal of the existing SuperApplier implementation which will become redundant once ModelRelay is complete.\n"
    }
  ]
}
---
Currently super applier supports fireChangeRequest.\
We also need to support modelChanged listeners and guards.

        