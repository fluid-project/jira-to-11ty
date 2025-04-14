---json
{
  "title": "FLUID-5091",
  "summary": "Dynamic contributed grades do not merge components block correctly.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2013-07-16T12:46:08.557-0400",
  "updated": "2014-03-03T11:31:11.175-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5028/",
      "key": "FLUID-5028",
      "summary": "Allow set of subcomponents of a component to be responsive to \"changes\" which occur after subcomponent instantiation begins"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-07-16T23:18:53.499-0400",
      "body": "Thanks for this report and test case Yura - although this issue needs a little more description to qualify as a good writeup.\\\nIt turns out that although this is indeed related to the existing <https://fluidproject.atlassian.net/browse/FLUID-5028#icft=FLUID-5028>, it is a somewhat more straightforward issue and somewhat easier to patch. In fact the evaluation of the \"components\" field is caused early by the \"old-style ginger resolution code\" present in \"fluid.makeGingerStrategy\" - this makes an anticipatory check into the \"components\" field of every component it passes up the tree when it tries to resolve a reference - in particular the reference \"{fluid.tests.builderComponent}.options.gradeName\" in the grade structure causes this activity during the very earliest part of component instantiation, triggering the early resolution of the \"components\" member in all of the merging options blocks - since this is empty in the original (static) options set, it remains empty for all time during component instantiation.\\\nThis would be resolved in a number of ways - for example, when we have <https://fluidproject.atlassian.net/browse/FLUID-4925#icft=FLUID-4925> \"wave of explosions\" this check will no longer occur, likewise when we deprecate \"initSubcomponents\". Finally, it would also be resolved by a full fix to <https://fluidproject.atlassian.net/browse/FLUID-5028#icft=FLUID-5028> itself - however, I've made a pull request with a quick patch for now, since any of these other changes involve ambitious improvements to the framework.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-08-17T03:58:47.604-0400",
      "body": "Finally resolved together with <https://fluidproject.atlassian.net/browse/FLUID-5093#icft=FLUID-5093> by use of the new utility \"destroyValue\" - merged into trunk at revision 81831f\n"
    }
  ]
}
---
Merging of contributed dynamic grades happens as expected except for the components block. It seems like all other options are actually present in the final component. Test case can be found here: <https://github.com/fluid-project/infusion/pull/362>

        