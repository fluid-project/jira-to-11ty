---json
{
  "title": "FLUID-4883",
  "summary": "Implement new event type of \"latched events\" which represent \"promise/deferred\" type events which may fire only once",
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
  "date": "2013-01-10T15:33:57.936-0500",
  "updated": "2024-07-22T10:35:03.378-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4982/",
      "key": "FLUID-4982"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4879/",
      "key": "FLUID-4879"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5513/",
      "key": "FLUID-5513"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-12T11:57:16.820-0400",
      "body": "@@Antranig Basman are \"latched events\" still in the plans?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-06-12T16:27:49.310-0400",
      "body": "Yes, they are - although the urgency for them will be reduced once we have the async ginger world. Eventually we need to bridge over the gap between \"observing a boolean options value\" and \"waiting for a latched event\". Also, all of our init lifecycle events are gone other than onCreate which reduces the urgency still further. It's possible that there will be no formal facility called \"latched events\" once we have implemented the \"changeApplier for options\" that one day will appear, but until then we should keep this JIRA open as a reminder. I'd call this a \"3.0 feature\". Since this JIRA was written I had the \"kebab shop realisation\" that our complex boiling cases would in the end all be handled by transforming relay rules.\n"
    }
  ]
}
---
<https://fluidproject.atlassian.net/browse/FLUID-4879#icft=FLUID-4879> revealed a situation in which the framework required the user to take very different strategies depending on whether an event was expected to be fired synchronously or not. This is generally unacceptable - designers should have ways of being agnostic to these kinds of issues.

The community at large has a well-defined semantic for this kind of issue, which goes by the name of "promises" or in some communities a "deferred" object. That abstraction covers slightly more than we require here, in that it also comprises the semantic of a "deferred value" which is either available immediately or in the future. What we require here is only the timing semantic portion of this abstraction - that is, an event which is either considered to have "already fired" or will fire in the future.

Events of this new type would be expected to fire only once during the entire lifetime of the firer. These events would in addition have the special behaviour that if a listener is registered with them at any time AFTER this one event firing has occurred, that listener will be notified immediately on registration. This is in agreement with the behaviour of a "deferred" object, which if "resolved" at any time after its value is available, returns it immediately. Events of this type would be defined with a new RHS value in the listener block, possibly the string "latched". All existing readiness events which match the specification, e.g. all of our lifecycle events (onCreate, onAttach, preInit, etc.), would be converted to this type. We would ensure that any boiling of such events led to events which were also of this type. We might need to directly prohibit boiling of these events together with events of the existing conventional type which might fire multiple times (e.g. onRefresh, onChange etc.)

        