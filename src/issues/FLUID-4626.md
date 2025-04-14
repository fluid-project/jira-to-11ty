---json
{
  "title": "FLUID-4626",
  "summary": "IoC framework reports instantiator corruption when dispatching an IoC-aware event to components from a different instantiation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2012-02-29T00:28:52.884-0500",
  "updated": "2014-03-03T13:00:01.591-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4192/",
      "key": "FLUID-4192",
      "summary": "Improve handling of cases with \"broken trees\""
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-02-29T00:32:29.212-0500",
      "body": "Note that <https://fluidproject.atlassian.net/browse/FLUID-4192#icft=FLUID-4192> (\"broken trees\") also requests an instantiator stack\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-03-21T16:45:31.415-0400",
      "body": "Merged into project repo at edc04019823ec25614286d262589ab5fca33a0f6\n"
    }
  ]
}
---
The following report is triggered - \
fluid.fail("Error in applyInstantiator: user instantiator supplied with id " + userInstantiator.id \
\+ " which differs from that for currently active instantiation with id " + existing.id);\
}

We actually need to move back to the historical scheme of maintaining an instantiator stack in parallel with the execution stack, if we want to continue with the facility for restoring a "local" instantiator across an event boundary, which we probably do. This created a problem with UIOptions/videoPlayer integration as an event dispatched from UIOptions model update to an invoker within the videoPlayer which resulted from a separate instantiation. This has probably never been seen in CSpace since it follows a more "modern" model of using a single instantiator throughout.

        