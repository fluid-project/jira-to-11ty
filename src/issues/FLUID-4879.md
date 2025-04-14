---json
{
  "title": "FLUID-4879",
  "summary": "Aggregate events aren't properly injected into another component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Not A Bug",
  "reporter": "Anastasia Cheetham",
  "date": "2013-01-09T12:40:26.283-0500",
  "updated": "2017-10-06T19:19:43.423-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4883/",
      "key": "FLUID-4883",
      "summary": "Implement new event type of \"latched events\" which represent \"promise/deferred\" type events which may fire only once"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4873/",
      "key": "FLUID-4873"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-01-10T15:17:04.354-0500",
      "body": "Hi, anastasia - I looked into this test case and found that the event is indeed being injected correctly up into component 1 and the listener is registered correctly. The issue now is that since the construction of comp2 and all of its children is synchronous, the complete system of finalInit functions and onReady events for the subtree concludes before comp1 finishes instantiating. Thus the registration of comp1's root listener to the onReady event happens AFTER the event has already fired. If you modify your onReady registration function to read as follows:\n\n```java\nfluid.tests.onReadyFirer = function (that) {\r\n        window.setTimeout(function() {\r\n            that.events.onReady.fire(that);\r\n            }\r\n            , 1);\r\n    };\n```\n\nyou will find that the test case then runs correctly given there will then be true asynchrony in the subtree leading from comp2 (you will need to adjust your test count up to 4).\n\nThis sounds like it is realistic in your case since you mentioned (offline, in IRC) that one of your subcomponents depends on a template loading. In the case the subcomponents are indeed all synchronous in readiness, you should fall back to the system we discussed last month, using comp2's onCreate event as the overall timer.&#x20;\n\nI do say that this current situation is unsatisfactory - it's not really appropriate to have to use these two very different methods (boiled event or supercomponent event) depending on whether or not a particular situation is asynchronous or not, but I can't think of a scheme right now using the current framework of treating this differently - right now you will need to be sure at design time whether an event is synchronous or not and choose the appropriate strategy - and, if necessary, ENSURE that the event is asynchronous if there is some possibility that it might not be (for example, loading a template unexpectedly from a cache that resolves immediately). Treating this case properly seems like it requires some extra semantic on framework events that we will need to think about - e.g. \"latched events\" - or some kind of event which represents a (e.g. jQuery) \"deferred\" which is expected to only ever fire ONCE.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-01-11T16:19:02.790-0500",
      "body": "I'm having trouble even instantiating the controllers subcomponent in the VideoPlayer once I correct the injection of the event. Perhaps you could look at the actual VideoPlayer code (and not my test case) and offer some advice?\n\nThe controllers subcomponent onReady is aggregated here:\\\n<https://github.com/acheetham/videoPlayer/blob/c826863203908b49963b366d83bd31d26705e00e/js/VideoPlayer_controllers.js#L155-171>\n\nThe controllers onReady event is injected into the video player here:\\\n<https://github.com/acheetham/videoPlayer/blob/c826863203908b49963b366d83bd31d26705e00e/js/VideoPlayer.js#L235>\n\nThe error I'm getting is in trying to instantiate the controllers subcomponent: its container is not defined.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-01-15T13:48:59.717-0500",
      "body": "Antranig, if you get a chance to have a look at this, please make sure to look at this specific commit:\\\n<https://github.com/acheetham/videoPlayer/tree/c826863203908b49963b366d83bd31d26705e00e>\\\nand not later ones. I'm going to clean up the branch to at least get something working, since another fix is waiting for it.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T16:03:59.924-0400",
      "body": "Caused by another reason.\n"
    }
  ]
}
---
It seems that if an aggregate event is injected into another component, the parent event doesn't fire. I've created a test case, at the bottom of:

<https://github.com/acheetham/infusion/blob/FLUID-4879/src/webapp/tests/framework-tests/core/js/FluidIoCTests.js>

In this test case, comp2's onReady event fires once its subcomponents fire their onReady events, but the root comp1 onReady, which should be injected from comp2, never fires. It seems as though the event is not actually being injected?

I encountered this problem working on the VideoPlayer: The player's controllers component has several subcomponents. I want the controllers' component's onReady event to be an aggregate of all of the subcomponent onReady events (the way comp2's onReady is an aggregate). I also want the VideoPlayer to share the controllers' onReady event, the way comp1 shares comp2's onReady event.

        