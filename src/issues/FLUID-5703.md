---json
{
  "title": "FLUID-5703",
  "summary": "Model Transformation system must not prune out execution of all transforms whose value input is undefined",
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
  "date": "2015-07-02T19:02:17.867-0400",
  "updated": "2016-07-08T08:47:47.780-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-07-03T07:01:21.014-0400",
      "body": "This is not a bug - simply a result of our own forgetfulness about the meaning of our transform grade structure. Any transform can opt out of the standard input value workflow by simply avoiding including the \"fluid.transforms.standardInputTransformFunction\" grade. For example, the fluid.transforms.stringTemplate transform that we were originally trying to implement can just be registered with \"fluid.transforms.standardOutputTransformFunction\" gradeNames.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2015-07-08T08:57:32.377-0400",
      "body": "Antranig, the standardOutputTransformFunction grade also seems to return nothing unless you have a value.  Can  you recommend another grade?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-07-08T13:22:51.355-0400",
      "body": "Hi @@Tony Atkins \\[RtF] - the output works just fine, as shown in the following commit - <https://github.com/amb26/infusion/commit/194850705c5dbebf56f423a4847868e2f5bdb1ea> (part of <https://github.com/fluid-project/infusion/pull/616> ) - perhaps you have some other problem.\n"
    }
  ]
}
---
The model transformation system's "fluid.model.transform.doTransform" core implementation contains the following short-circuit:&#x20;

// if the function has no input, the result is considered undefined, and this is returned\
if (expanded === undefined) {\
return undefined;\
}

This is a faulty assumption in general, especially for IoC-driven transforms. However, it is valid for simple transform functions which have been "lifted" from plain functions. We need to distinguish between functions which have received a non-empty "transformSpec" (other than "type") and those which are plain functions and defeat the behaviour for the former.

        