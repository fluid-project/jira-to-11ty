---json
{
  "title": "FLUID-5903",
  "summary": "Eliminate fragile sequence array-building code in IoC Testing Framework in favour of \"grade constraint budding system\"",
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
  "date": "2016-05-08T13:52:39.009-0400",
  "updated": "2024-07-22T09:26:01.574-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-10-24T16:00:03.849-0400",
      "body": "The pull request for the infusion implementation <https://github.com/fluid-project/infusion/pull/755> has been merged at ff72b53d80c2c11c360e57e8f62e50dbca337875\n\nThe corresponding documentation update is still needed.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-12-18T21:47:02.035-0500",
      "body": "Some meeting notes where this feature was presented and discussed have been wikified at <https://wiki.fluidproject.org/display/fluid/Motivation+and+Explanation+for+New+IoC+Testing+Framework+Feature+sequenceGrade>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-02-02T12:40:14.868-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion-docs/pull/103> ) into the docs repo.\\\nmerged into master @ bde03ec4685861428fdee5a53f254038298ab162\\\nmerged into 2.x.x @ 67929cb89c8a33d428d905b65436c6d729dcf135\n"
    }
  ]
}
---
Lots of code around the place struggles with the fact that whilst IoC Testing framework sequences, unlike promise chains, are "openly authorable", they are sadly only openly authorable in the most miserable form of plain arrays. For example, consider the following utility `gpii.test.express.helpers.addRequiredSequences` in gpii-express tests:

<https://github.com/GPII/gpii-express/blob/master/tests/js/lib/test-helpers.js#L138>

or the more elaborate but still ultimately wrong-headed array bashing code in the GPII CloudBased OAuth2 tests' "buildDisruptedFixture"

<https://github.com/GPII/universal/blob/master/gpii/node_modules/testing/src/CloudBasedOAuth2.js#L536>

Another such "epicycle" is our support for fluid.flatten() applied to these arrays which at least does the courtesy of allowing them to be built up as "arrays of arrays" (but still, ultimately, not to be addressed in a usable and stable way).

This infrastructure fails to deliver on our core values - that of supporting open authorship in an unbounded community. We need to move to a system which allows time-points in testing sequences to be addressed as stable landmarks - very similar to all the other systems that fall under our <http://docs.fluidproject.org/infusion/development/Priorities.html> system (which did not exist at the time the IoC Testing framework was designed).

This use case might not in the end be more difficult than any of the others we have so far tackled. We need to support "sequence inheritance" in which the sequence itself is directly represented as a GRADE. Sequence blocks (short arrays) can be assigned namespaces and namespace-based priorities, and the inheritance process will then allow refined blocks to interleave themselves at arbitrarily chosen and stably identifiable points in between the sequence blocks of parent grades. This will be somewhat similar to the "transforming promise chain" approach.

One advanced capability we would like would be to ingest an entire block produced by a parent grade and replace it with a processed instance. This requires highly advanced control over mergePolicies - see ideas on "local mergePolicy" aired in IRC on <https://botbot.me/freenode/fluid-work/2015-09-11/?msg=49513398&page=1> required for <https://fluidproject.atlassian.net/browse/FLUID-4982#icft=FLUID-4982>.&#x20;

        