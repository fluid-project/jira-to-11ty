---json
{
  "title": "FLUID-4633",
  "summary": "Upgrade ChangeApplier to support source tracking across nested change invocations",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2012-03-04T23:23:10.044-0500",
  "updated": "2014-03-03T12:59:41.958-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2012-03-22T15:12:32.020-0400",
      "body": "Merged into project repo at a61001900ddc39bb58e1c3c20679aef7c945aae3\n"
    }
  ]
}
---
As we are now starting to address more and more complicated UI scenarios with multiple components interacting with the same model, support for "backwash prevention" needs to be upgraded. This is a harmful phenomenon where changes triggered by a particular UI control can "wash back" to trigger changes on itself, after having gone through the phase of propagating to the model, notifying the listeners, one of which is for that same UI control - the result is an indefinite propagation of changes. \
Existing framework support and simple techniques (for example, ignoring "null changes" which leave the model or UI state unchanged, or simple use of the "source" flag on a ChangeApplier request) have been enough to deal with the cases we have met so far - however, a situation arisen within the VideoPlayer regards support to be upgraded to the next level of quality. This situation involves in interaction between the VideoPlayer volume control and mute button. The "indirect infinite recursion" is triggered through the following path:

mute control triggered\
\--> volume set to 0 (model)\
\--> slider value set to 0\
\*\***via jQuery**\*\*\
\---> listener to volume model to 0\
\--> mute button listener&#x20;

The next level of support stores the set of changes sources accumulated so far within a "threadLocal" which accumulates names until all events triggered from top-level have concluded.

        