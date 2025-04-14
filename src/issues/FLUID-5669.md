---json
{
  "title": "FLUID-5669",
  "summary": "Equality operators (binOps) implemented as model transformations should use fluid.model.isSameValue for comparison",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2015-05-21T11:32:31.570-0400",
  "updated": "2016-02-04T12:37:03.416-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework",
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Kasper Galschiot Markus",
      "date": "2016-01-22T06:17:33.761-0500",
      "body": "<https://github.com/fluid-project/infusion/pull/663>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-02-04T12:34:52.676-0500",
      "body": "Thanks so much for this useful fix, KASPARDNITT! Merged into trunk at revision d6edf4f590c6fec6cc7d6d44bdb75060e87123e8\n"
    }
  ]
}
---
The new ChangeApplier (FLUID-5115 etc.) uses a special utility "fluid.model.isSameValue" in order to determine when attempted modifications to a model actually leave it in "morally the same condition". This extends two particular courtesies to the user, both relating to handling of numbers - \
i) firstly, it operates a "floating point slop" rule in order to accept as equivalent two floating point numbers which are close enough that they could have arisen through a round-trip through both legs of a "reasonable arithmetic transformation lens)\
ii) secondly, it considers, contrary to traditional FP semantics, that any two NaN values are the same as each other (FLUID-5509)&#x20;

To make the abstraction of the relay system more consistent, we should adjust the implementation of the equality comparison operators "===" and "!==" that are supplied as transformation rules so that they apply the same utility.

This arose in work with the first discovery tool and a defect report <http://issues.fluidproject.org/browse/FLOE-346> that the "disabled" attribute was not being added to the "reduce size" button when zoom was at the bottom of its range, as a result of "floating point slop" in the first place. <https://botbot.me/freenode/fluid-work/2015-05-20/?msg=39714084&page=2> - the first suggestion was to use the fluid.model.isSameValue utility directly, and the second suggestion was to rewrite this linkage using modelRelay. As a result of the inconsistency reported in this JIRA, the workaround was to write a relay rule using the "free" transform with an explicit invocation of fluid.model.isSameValue.

        