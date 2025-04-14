---json
{
  "title": "FLUID-4564",
  "summary": "Rationalise system for registering event listeners, providing consistency with lifecycle listeners and namespace semantics",
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
  "date": "2011-11-30T02:35:05.677-0500",
  "updated": "2024-07-22T09:40:28.415-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2012-01-20T16:49:27.725-0500",
      "body": "Merged into the project repo at 1e7f0d8f071a69ef5d9cd75e18fc0fe3da170622 with several framework change issues:\n\n<https://fluidproject.atlassian.net/browse/FLUID-4525#icft=FLUID-4525>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4532#icft=FLUID-4532>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4537#icft=FLUID-4537>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4539#icft=FLUID-4539>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4564#icft=FLUID-4564>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4563#icft=FLUID-4563>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4568#icft=FLUID-4568>\n"
    }
  ]
}
---
Essentially since inception, the Fluid events system has operated a semantic for registering listeners that is now judged incorrect. Supplying a listener for an event which already has a listener registered in the defaults of the component will displace the listener, rather than the more consistent behaviour of registering in addition to it. This behaviour was originally implemented before namespacing for Fluid events was implemented, and was the only way to "displace" a listener which appeared in the component defaults.\
The more consistent behaviour would be to agree with the behaviour of "addListener" if supplied the extra listener. This was actually the implementation that was chosen for "lifecycle listeners", but to avoid disturbing users of the framework in the middle of a release cycle, this was implemented using a completely independent options merging scheme.\
This work is now blocking <https://fluidproject.atlassian.net/browse/FLUID-4541#icft=FLUID-4541> since the lifecycle listener implementation is proving a performance bottleneck, impeding implementation of caching for <https://fluidproject.atlassian.net/browse/FLUID-4563#icft=FLUID-4563>.

        