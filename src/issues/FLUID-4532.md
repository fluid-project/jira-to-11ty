---json
{
  "title": "FLUID-4532",
  "summary": "Reorderer instantiated using IoC throws error when ariaLabeller tries to create liveRegion element",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2011-11-01T14:13:29.905-0400",
  "updated": "2012-01-20T16:48:41.217-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4532/FLUID-4532.patch.txt",
      "filename": "FLUID-4532.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-11-01T14:16:46.715-0400",
      "body": "The attached patch (<https://fluidproject.atlassian.net/browse/FLUID-4532#icft=FLUID-4532>.patch.txt) adds a unit test that provokes the error.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-11-01T14:24:21.676-0400",
      "body": "I showed this problem to Yura, and he was actually surprised that in the \"working\" case (i.e. when the Reorderer is instantiated manually), the ariaLabeller makes onto the thatStack at all. I was also curious about that, and still can't figure it out.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-11-13T02:37:30.475-0500",
      "body": "This implementation should never have been using IoC - this looks like a grievous conceptual error left over from some cleanup after CSpace/1.3 work of late last year. As well as running into the <https://fluidproject.atlassian.net/browse/FLUID-4192#icft=FLUID-4192> \"broken trees\" issue, this unacceptably exposes users of FluidView\\.js onto a dependence on the IoC system. It should be possible for anyone to use the aria labeller without including IoC - I have reverted the impl onto an old-fashioned \"unicast\" event for the time being which will still enable this strategy to be customised as per the apparent original intention.\n\nTo answer the previous conundrum, if there was not any instantiator allocated at the time the component was constructed, the framework would automatically bring one into existence (as part of the \"withInstantiator\" startup workflow) holding just the parent component (the aria labeller). This behaviour is clearly inconsistent, which is the reason for the <https://fluidproject.atlassian.net/browse/FLUID-4192#icft=FLUID-4192> report in the first place. This will be cleared away as part of the <https://fluidproject.atlassian.net/browse/FLUID-4392#icft=FLUID-4392> work.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-01-20T16:48:41.215-0500",
      "body": "Merged into the project repo at 1e7f0d8f071a69ef5d9cd75e18fc0fe3da170622 with several framework change issues:\n\n<https://fluidproject.atlassian.net/browse/FLUID-4525#icft=FLUID-4525>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4532#icft=FLUID-4532>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4537#icft=FLUID-4537>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4539#icft=FLUID-4539>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4564#icft=FLUID-4564>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4563#icft=FLUID-4563>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4568#icft=FLUID-4568>\n"
    }
  ]
}
---
When a Reorderer component is created through the IoC system (as a subcomponent of something, as opposed to a direct call to the creator function), the act of moving an element results in an error. The error occurs in fluid.ariaLabeller.generateLiveElement(): 'that' is undefined. The generation of the live element occurs as part of fluid.updateAriaLabel(), which calls the ariaLabeller's update() function.

I'm not quite sure whether this an error in the IoC system, or in the ariaLabeller itself. Everything is fine when the reorderer is instantiated "manually" (as is the case in the demos).

        