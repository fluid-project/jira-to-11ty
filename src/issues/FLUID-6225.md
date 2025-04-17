---json
{
  "title": "FLUID-6225",
  "summary": "Self-deduping algorithm has faulty statefulness with respect to uncaught exception handler",
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
  "date": "2017-11-15T18:27:41.367-0500",
  "updated": "2017-11-22T04:28:16.810-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the process of resolving KETTLE-65, Tony Atkins \[RtF] found that the simple process of updating Kettle's dependency on Infusion broke one of its tests, the "ErrorTests.js" which rely on interception via node's "uncaught exception handler".

It appears this arose simply because of a mismatch between the versions of Infusion used by kettle and node-jqunit - these had been brought into step by a previous round of dedupe fixing.

It turns out that the Infusion module loader operates the faulty sequence of registering its listener for the uncaught exception handler first, before it attempts to see if it itself is the winner of the "dedupe race". This means that the handler now registered by the current version of node-jqunit ends up losing the race against the user.

The thinking behind this sequence had been that we wanted to make sure that any errors triggered during the self-deduping process itself would be reported by the same standard means, but we clearly can't have our cake and eat it in this regard. Also, we have issues with the noisiness of Infusion loading in any case - it sends messages direct to console.log because it can't yet depend on a working Infusion, but this makes it unsuitable for implementing certain kinds of apps, e.g. UNIX-style CLI ones.

        