---json
{
  "title": "FLUID-4987",
  "summary": "Listeners specified in a demands block will be registered twice",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2013-04-25T03:28:11.988-0400",
  "updated": "2014-03-03T11:57:07.613-0500",
  "versions": [
    "1.5"
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
      "date": "2013-05-02T17:26:37.822-0400",
      "body": "Merged in to trunk at revision d0f009b\n"
    }
  ]
}
---
This problem did not appear in any released version of the framework, but plagued several revisions following the FLUID-4330 reform. It turns out that it was caused by some of the reforms to fluid.embodyDemands aimed at dealing with <https://fluidproject.atlassian.net/browse/FLUID-4392#icft=FLUID-4392> - material supplied in a demands block became "double accounted" as a result of also being sent to a record of type subcomponentRecord as a result of the still rather haphazard logic in fluid.embodyDemands. The opportunity was taken to remove a few more redundant operations in this method as well as fixing the error - however, it can't be reformed completely until manual component initialisation is discontinued.

Observed in simple material like the following:

fluid.demands("fluid.tests.demandListeners", \[], {\
options: {\
listeners: {\
demandEvent: "fluid.tests.demandRecording"\
}\
}\
});

        