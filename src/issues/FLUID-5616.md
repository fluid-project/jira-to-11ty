---json
{
  "title": "FLUID-5616",
  "summary": "Abolish \"init functions\" from the framework, since they are now completely supplanted by natural data-driven techniques",
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
  "date": "2015-04-07T15:28:54.818-0400",
  "updated": "2017-02-27T15:49:16.706-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
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
      "date": "2015-08-20T13:58:47.106-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
The "init functions" (preInitFunction, postInitFunction, finalInitFunction) have been obsolescent for a while (in fact, they were planned to be obsolescent when invented) but are still lingering in many component implementations and test cases. Now we are having a clean sweep of obsolete framework features, we should take the opportunity to remove them completely - in all cases they can be replaced by some other directive, whether "members", "invokers", or a suitably namespaced and prioritised "onCreate" listener.

        