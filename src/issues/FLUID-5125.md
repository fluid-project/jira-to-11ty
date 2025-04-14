---json
{
  "title": "FLUID-5125",
  "summary": "Demands blocks are applied out of the context scope if the demanding component is shared by siblings",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-09-06T11:59:57.584-0400",
  "updated": "2014-03-03T11:29:10.698-0500",
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
      "author": "Antranig Basman",
      "date": "2013-09-07T04:26:42.646-0400",
      "body": "Hi cindyli - unfortunately this behaviour is \"working as designed\". The demands block is applicable to the sibling component, since the context name \"fluid.tests.fluid5125Sub1\" is resolvable from there, since the component is part of the set of \"siblings of ancestors\". For example - were you to use the context \"{fluid5125Sub1}\" within the 2nd subcomponent, it would be resolvable by the standard resolution rules, and hence it is also valid as a context name for the purposes of demands resolution.\n\nSee our standard \"yellow squares\" diagram for an illustration: <http://wiki.fluidproject.org/display/docs/Demand+Resolution>\n\nAlthough this behaviour may seem peculiar, it can't be altered without changing the meaning of all demands blocks and causing many current uses of them, e.g. for progressiveEnhancement to fail. As I mentioned in the channel today, it is safer to start relying on the \"distributeOptions\" mechanism instead since the downward-matching selectors that it uses are free from this possibly awkward interpretation applied to the upward-matching contexts used for matching demands blocks contexts - as well as the fact that recent discoveries (see GPII architecture list for today, 7/9/13) suggest that we should deprecate the use of demands blocks altogether and remove them from the framework.\n"
    }
  ]
}
---
The demands block:

fluid.demands("fluid.tests.fluid5100ToRemove", \["fluid.tests.fluid5100Sub1"], {\
funcName: "fluid.emptySubcomponent"\
});

If the demanding component "fluid.tests.fluid5100ToRemove" is shared by two sibling components such as:

fluid.defaults("fluid.tests.fluid5100", {\
gradeNames: \["fluid.littleComponent", "autoInit"],\
components: {\
sub1: {\
type: "fluid.tests.fluid5100Sub1",\
options: {\
components: {\
toRemove: {\
type: "fluid.tests.fluid5100ToRemove"\
}\
}\
}\
},\
sub2: {\
type: "fluid.tests.fluid5100Sub2",\
options: {\
components: {\
toRemove: {\
type: "fluid.tests.fluid5100ToRemove"\
}\
}\
}\
}\
}\
});

Even though the demands block is expected to be only applied to its context component "fluid.tests.fluid5100Sub1", it's actually applied to both siblings.

A test case is created @ <https://github.com/cindyli/infusion/blob/FLUID-5125/src/tests/framework-tests/core/js/FluidIoCTests.js#L3206-L3255>

        