---json
{
  "title": "FLUID-3683",
  "summary": "Improve fluid.fetchResources and expander architecture to permit \"deferred fetch\" for expansion of JSON structures",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2010-08-08T20:28:34.488-0400",
  "updated": "2014-03-03T13:42:39.365-0500",
  "versions": [
    "1.2",
    "1.3.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-08-08T20:32:06.256-0400",
      "body": "Implemented at revision 9983\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-03-03T16:53:56.468-0500",
      "body": "Changed the \"Affect Version\" to 1.3.1.\n"
    }
  ]
}
---
In order to handle <http://issues.collectionspace.org/browse/CSPACE-2568> , we need further improvements to fluid.fetchResources to allow declarative expansion directives for JSON structures. "fluid.expander.deferredFetcher" is an expander which may be embedded in a structure which is being expanded by fluid.expandLight (previously packaged as part of the renderer infrastructure). When encountered by the expansion process, this expander i) queues an appropriate resourceSpec structure in a collection held in the environment at "{resourceSpecCollector}", which when fetched ii) evaluates its data as JSON and attaches it in the place of the expander in the original structure.

A group of related infrastructure is now emerging around "fluid.fetchResources" which should really be packaged as part of its own file (currently spread between fluidIoC.js and fluidParser.js). Proposal for "fluidRequests" in the core framework.

The damn CATT destroyed this JIRA once already...

        