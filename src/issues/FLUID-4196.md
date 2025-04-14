---json
{
  "title": "FLUID-4196",
  "summary": "Specifying listeners during initialization overwrite instead of merging into defaults.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2011-04-28T23:19:07.020-0400",
  "updated": "2011-05-02T12:24:19.672-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
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
      "date": "2011-04-29T00:04:24.166-0400",
      "body": "I am happy once more to be able to use the new magnificent \"NOT A BUG\" resolution. I added a test case derived from the one supplied to FluidJSTests.js to demonstrate this is not an issue. Although the listeners as \"objects\" are lost during the merging process, they are successfully registered as listeners as the test case demonstrates. The listeners as objects should not be directly manipulated by the user in any case, but instead through the event firer API attached to the event for which they are registered. Since by the time options merging is complete, they have been attached to the firer as listeners, their lifecycle is already complete - interacting with them as listeners within the options block would have no effect on the actual processing of the event.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-29T08:53:58.103-0400",
      "body": "while the new test case doesn't quite test what I was trying to, as you test eventThree instead of the ones that I was claiming to be overwritten 🙂 . I did play around with it and it does indeed appear to be working as you say.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-04-30T02:19:35.467-0400",
      "body": "Apologies for the completely shoddy test case which failed to demonstrate anything - you are quite correct that this is a bug, and I think a very long-standing one. I expect the expectation at the time was that listeners would be displaced through overriding, since at the time we had not implemented event namespacing. In my mind I had also mixed up the implementation of the \"lifecycle events\" system with the main events system leading me to believe that the latter used the same system as the former. \\\nThe reason this area is so knotty is that the idiom applied for combining listeners has to execute even **BEFORE** the preInitFunction executes, since it is applied during options merging. Without a special \"slow track\" to defer expansion of listener material these would fail to resolve onto material like your \"eventFired\" handler. Thanks for supplying such a good test case.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-04-30T02:22:45.924-0400",
      "body": "Now fixed in trunk with dedicated mergePolicy for listeners. Thankfully these actually work now, having been fixed earlier for the work on lifecycle functions 🙂\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-02T12:24:19.669-0400",
      "body": "Unit tests look good, things seem to be working now.\n"
    }
  ]
}
---
If an integrator specifies a listener when initializing an auto inited component, the passed listener object overwrites the one specified in the defaults. This means that all of the default listeners will be removed.&#x20;

I've created a FLUID-4196 branch in my github repository that has a unit test demonstrating the issue.\
<https://github.com/jobara/infusion/commit/f2d7d15d351c0f28a2d862da36143c6f2d6f75c6>

Note: this issue occurs even if you were to pass in an empty listeners object.

fluid.someComponent(".container", {\
listeners: {}\
});

        