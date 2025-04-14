---json
{
  "title": "FLUID-5632",
  "summary": "Prevent stack overflow in model relay through introduction of NaN values into model and other causes",
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
  "date": "2015-04-17T13:48:56.487-0400",
  "updated": "2017-02-27T15:49:18.688-0500",
  "versions": [
    "1.9"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5509/",
      "key": "FLUID-5509",
      "summary": "Storing NaN via a \"new-style applier\" will cause infinite recursion in DataBinding"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T14:44:42.447-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
So far our "link counting system" described in FLUID-5303 is inactive, which leaves us at high risk of runaway propagation of updates. We should at least add back in a safety net of some kind to ensure that runaway propagation triggers a framework diagnostic rather than a stack overflow.

We should also fix the algorithm in fluid.model.isSameValue to cut off the currently dominant possibility for failure to settle - any NaN that gets into the model will ensure that it can never compare equal to itself. This was observed during development of Flocking -&#x20;

Clark Kent: I get the most informative error\
\<error>\
Antranig Basman: !\
From where\
Clark Kent: fetchChangeChildren\
Antranig Basman: All it says is \<error"?\
Clark Kent: yes, literally \<error>\
Antranig Basman: This must be Chrome\
It's got far far worse at diagnostics recently\
Clark Kent: yes\
Firefox is telling me I have too much recursion\
Antranig Basman: Yup, it calls fluid.audioSystem.calcNumBlocks with (undefined, undefined)\
It returns NaN which then gets into the model and then everything goes bananas

        