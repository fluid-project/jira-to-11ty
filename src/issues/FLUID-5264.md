---json
{
  "title": "FLUID-5264",
  "summary": "progressiveCheckerForComponent does not look for progressiveChecker options supplied to a component at instantiation.",
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
  "reporter": "Justin Obara",
  "date": "2014-01-31T13:16:59.105-0500",
  "updated": "2017-02-27T15:49:10.858-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Progressive Enhancement"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5241/",
      "key": "FLUID-5241",
      "summary": "Complete functionality of \"new demands blocks\" by rounding out and renaming facility provided by \"progressiveEnhancement\""
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5249/",
      "key": "FLUID-5249",
      "summary": "Rationalise handling of \"instantiators\" to produce by default only one per Fluid context"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-01-31T13:19:52.049-0500",
      "body": "Submitted a pull request with a unit test for the issue\\\n<https://github.com/fluid-project/infusion/pull/460>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-03-18T21:50:49.236-0400",
      "body": "I tried making a simpleminded fix for this issue based on \"fluid.getForComponent\" but discovered that our usage pattern in the Uploader is too complex to be cleared up without major work. The issue is that the uploader is created in two varieties of configuration, one where the progressiveChecker is attached to the component as \"uploaderContext\" and another where it is attached to the \"staticEnvironment\". All of these areas of the framework are in the process of being rethought, together with JIRAs such as <http://issues.fluidproject.org/browse/FLUID-5249> and <http://issues.fluidproject.org/browse/FLUID-5241> - so it would be best to rework this implementation thoroughly - at the same time renaming it as \"contextAwareness\" or so.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T14:28:57.422-0400",
      "body": "pull request: <https://github.com/fluid-project/infusion/pull/591>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T10:01:35.270-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n\nprogressiveChecker is abolished and replaced by contextAwareness\n"
    }
  ]
}
---
Currently the progressiveCheckerForComponent looks up a components defaults when attempting to find the the progressiveCheckerOptions.&#x20;

<https://github.com/fluid-project/infusion/blob/master/src/framework/enhancement/js/ProgressiveEnhancement.js#L130>

However, this ignores any options supplied to component at instantiation time. Amongst other things, this prevents an integrator from directly adding a progressive enhancement step to a component at instantiation.

        