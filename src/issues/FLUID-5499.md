---json
{
  "title": "FLUID-5499",
  "summary": "Think about scheduling of effects within the framework - especially the destruction of components",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-08-21T18:43:44.232-0400",
  "updated": "2017-03-11T22:58:31.714-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4890/",
      "key": "FLUID-4890",
      "summary": "Firing an event to a listener registered by a destroyed component should trigger an error immediately"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5333/",
      "key": "FLUID-5333",
      "summary": "Create support for \"abortable events\" in the framework, to deal with cases where the holding component is destroyed"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5578/",
      "key": "FLUID-5578"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5592/",
      "key": "FLUID-5592"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6148/",
      "key": "FLUID-6148"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-08-21T18:51:28.627-0400",
      "body": "Note that without the major improvements to debuggability that we have been frequently calling for, for example under <https://fluidproject.atlassian.net/browse/FLUID-4884#icft=FLUID-4884>, this will further impede debugging and understanding the action of the framework, given the effective cause for the destruction of a component will no longer be easy to determine as it will no longer lie underneath the current stack frame.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-01-26T20:55:55.391-0500",
      "body": "We will continue to operate the \"abortable events\" model - <https://fluidproject.atlassian.net/browse/FLUID-5592#icft=FLUID-5592> represented a further incarnation of the same issue.\n"
    }
  ]
}
---
The work on FLUID-5497 suggested that our issues related to timing of effects in the framework may be starting to reach a critical mass. The modern framework is relatively careful about refusing to allow effects targetted at or propagated from destroyed components - this was introduced in FLUID-4890 and FLUID-5333.

FLUID-5333 is interesting from this point of view, since it eliminates an important class of error, firing a component from a component which has been destroyed - or even continuing to fire events from a component which has been destroyed partway through the firing process.

However, the FLUID-5497 work revealed a more subtle form of the same error which is extremely hard to guard against. The case relates to listeners which are contributed, say, to one of component A's events, by component B. Partway through the firing of A's event, component B is destroyed - the framework properly automatically deregisters B's listener from A - unfortunately with our current implementation this has no effect on the current listener list. In general iterating over lists which are being structurally modified in JavaScript is a silly idea, for which the language supplies no idiomatic support (note that Java, for example, devoted a lot of effort in its early stages to providing crude solutions to such problems which were eventually abandoned as expensive and wrongheaded).&#x20;

Rather than to continue to beef up our support for gracefully handling all the myriad cases of concurrent notification during destruction, it may be promising to try a different tack, and reschedule the cases where the framework will trigger actual destruction.

This idea was triggered by considering the values lying behind the evolution of the Promises/A+ specification, which a couple of years ago was revised to insist that every promise resolves asynchronously. This github issue is a particularly interesting record of thinking - <https://github.com/promises-aplus/promises-spec/issues/4> - whilst it has become "received wisdom" on the net that "any API which could resolve asynchronously, must always resolve asynchronously", it is very interesting that a year after the thread lapsed, a participant appeared with considerable experience who maintained the opposite side.

However, from the technical point of view was the point that this is possible at all, and at least within node.js, is quite easy. In the browser, we have a lack of direct support for such an idiom - setTimeout, for example, is in general not specified to be able to schedule an effect in less than 1ms and in many cases considerably worse - <http://stackoverflow.com/questions/8341803/difference-between-settimeoutfn-0-and-settimeoutfn-1> . This would impose an unbearable performance overhead if applied on every component destroy.

However, we have sufficient control over entry points into the framework's code that we could implement a "scheduler", of the kind present, for example, in versions of when.js later than 2.0.0. This would allow us to implement a reasonable replacement for node's "setImmediate" method.

Scheduling component destruction, the effect which has the greatest risk for introducing corruption into event notifiers, only during the "idle time" of the framework could have a great potential to increase reliability and consistency with little performance overhead and implementation complexity.

Some discussion was on this in IRC at <https://botbot.me/freenode/fluid-work/2014-08-21/?msg=20136409&page=1> .&#x20;

This is also related to the behaviour of the model relay system in only notifying changes after the conclusion of "transactions" - ensuring that all intermediate effects propagate, getting the system into a consistent state, before we try to propagate effects into the wider environment, is very important in achieving consistent and deterministic effects - as well as the implementation strategy, using a variety of "preCommit" and "postCommit" hooks, being somewhat similar. That is, a transaction commits only when the framework "no longer finds anything better to do".

        