---json
{
  "title": "FLUID-5925",
  "summary": "Failure to trigger ginger resolution from IoC-qualified listener key",
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
  "date": "2016-07-05T20:48:16.265-0400",
  "updated": "2016-10-20T14:07:42.572-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-08-04T12:35:22.114-0400",
      "body": "This report seems to be incorrect and confused. The implementation within fluid.expandImmediate is **indeed** the \"fluid.expander.fetch\" implementation that is mentioned, and so is resistant to the problem described. It's been so far impossible to demonstrate this in a test case.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-10-20T14:07:35.356-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/731> to demonstrate the non-existence of this issue has been merged into the master at 4596804313815bc6f6b43c8346337d219ea7e2e2\n"
    }
  ]
}
---
<https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> has left still further unexploded ammunition, in the form of the raw use of "fluid.expandImmediate" in fluid.mergeListeners (and indeed in numerous other places). The comments on this function states "Main pathway for freestanding material that is not part of a component's options" which is a possibly helpful warning but reflects an incomplete understanding of the possible workflows this material might be in.

It seems that the core logic that we have within "fluid.expander.fetch", with the opportunistic logic detecting whether there is a "fit" underway, needs to be hoisted up into all cases of expansion - even if this involves a loss of performance in our recently optimised invokers and listeners. These all assume that the component tree is static at the time of dispatch - which might be true for listeners but is not true for all cases of invokers - at least in the somewhat rare case of a dynamic grade which is dispensed from an invoker.

Certainly the case of an IoC-qualified listener key is pretty blatant and we need to fix it - although the framework rewrite for FLUID-4925 would be preferable.

        