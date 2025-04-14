---json
{
  "title": "FLUID-4028",
  "summary": "Event firer iterates through listeners using for..in in array case",
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
  "date": "2011-01-07T17:34:37.076-0500",
  "updated": "2014-03-03T13:39:07.566-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4941/",
      "key": "FLUID-4941"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-08-16T18:41:02.266-0400",
      "body": "This landed as part of the large framework improvements commited at 3b65f07 for 1.4\n"
    }
  ]
}
---
Reported issue from Colin:

We have a bug in the ChangeApplier. We sort listeners into an array, then pass them off to fireToListeners(), which loops through each listener in the array using a for...in statement.

I stumbled across this issue because Palm automatically includes Prototype in all pages. As you know, Prototype slaps a whack of additional methods on Array.prototype, meaning all of our "own" arrays also receive these methods, causing our assumption that anything found while for...in'ing  sortedListeners is actually a listener to be incorrect.

I'd argue that the bug is using for..in on an array, ever. Alternatively, one might argue that the bug is that fact that we didn't filter with hasOwnPrototype() within the for...in statement.

Thought I'd pass this one along before I forget about it. Hope you're having a good holiday,

First response (from Antranig)

Thanks for passing that along... I guess I had sort of "unconsciously" noticed this issue when looking over the code earlier this month but wondered whether this was still a problem in this modern world 😛 In theory the answer to this is to now use fluid.each but I am worried already about the level of stack depth caused by a pass through fireEvent which is already too big... this was the main reason I didn't fix it up already. I will rack my brains over the holidays to see if I can think of any way of resolving both issues at once... I wasn't particularly happy about "fireToListeners" but I became considerably happier about it after we implemented "priority-based events" just before the release since that refactoring now becomes useful. We are due to fix up that area of code anyway since the ChangeApplier then needs to itself become refactored to use the other part of "priority events" that is now sitting in Fluid base.

Colin's reply:

It occurs to me that if this behaviour is an issue with Prototype-corrupted arrays, anyone adding to Object.prototype will similarly cause chaos for our otherwise ordinary curly braces. Remind me again of our argument about why we tolerate unfiltered for...in?

Antranig:

We do tolerate unfiltered for...in for iterating over Objects because we are clear in our framework that we never expect to iterate over members derived from the prototype, and nobody even remotely sane in the modern world makes additions to Object.prototype. The issue in this case is an addition to Array.prototype which is still something fairly widely seen (even though it is a completely malicious action) and you are right (in your first mail) to observe that an attempt to iterate over an array using for..in represents an error. I think I saw a few blog postings to this effect... it's a shame that Prototype is still a current library but hopefully this will go away over time. Probably not much faster than the upcoming JS ".forEach" facility becomes standard 😛

        