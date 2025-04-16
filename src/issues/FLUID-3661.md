---json
{
  "title": "FLUID-3661",
  "summary": "in the event system, fire should return true if event is not prevented",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2010-05-27T15:48:03.777-0400",
  "updated": "2015-06-09T12:53:05.584-0400",
  "versions": [
    "1.2",
    "1.3",
    "1.3.1",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": "all\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T08:44:41.209-0400",
      "body": "Antranig Basman do you have any thoughts on this issue?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-06-09T09:43:34.911-0400",
      "body": "\"preventable\" events are a real rarity and the real danger with them is that people might try to use them - it's hard to think of any genuine use cases, and on the other hand, I've found new users to Infusion trying to use them everywhere since they are attracted to them by the documentation. Making any change to the current behaviour would also be difficult - since we make the contract that \"the return value of received by the event firer is the first return value from a handler which is not undefined\". Returning true in the case of non-prevention would then break the contract that any explicit return from a handler is received by the firer. If you're ok with it, I'd vote for closing this issue as a \"Won't Fix\".\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-09T12:52:51.079-0400",
      "body": "I'm okay with won't fix. It's likely that most, if not all, cases that did or would use preventable events would be better handled via the change applier (model relay, model listeners, transformations).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-09T12:53:05.574-0400",
      "body": "See Antranig's comments\n"
    }
  ]
}
---
There are three types of events, 'multicast', 'unicast' and 'preventable'. When a preventable event is fired, one of its event listeners may return false, which prevents further listeners from being checked and cancels the event operation. The firer returns false when an event is prevented, however it does not return true when it is not prevented - instead it returns 'undefined'.

Note when testing the returned value, both false and undefined are 'falsey'. For convenience, it may be useful to return true when the event is not prevented.&#x20;

        