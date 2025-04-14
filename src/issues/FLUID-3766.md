---json
{
  "title": "FLUID-3766",
  "summary": "fluid.initDependent might want to check if dependent already exists",
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
  "reporter": "Anastasia Cheetham",
  "date": "2010-09-29T14:18:38.451-0400",
  "updated": "2011-10-14T16:09:52.217-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-12-10T15:48:54.798-0500",
      "body": "This was fixed for the 1.3 release - requires test case\n"
    }
  ]
}
---
Currently, it's possible that as a list of dependent subcomponents are created through fluid.initDependents(), the creation of subcomponent x might indirectly result in the creation of subcomponent (y>x) through getValueGingerly(). Then, when fluid.initDependents() gets to subcomponent y, it just goes ahead and creates it again, even though it has already been created and attached to the supercomponent that.

There might be a reason to do this deliberately, but if not, might it be possible for fluid.initDependent() to check whether or not the dependent has already been created, and not re-create it?

        