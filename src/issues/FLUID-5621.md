---json
{
  "title": "FLUID-5621",
  "summary": "Improve distributeOptions system so that priority of different distributions can be precisely controlled",
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
  "date": "2015-04-15T08:58:49.938-0400",
  "updated": "2017-02-27T15:49:17.848-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5587/",
      "key": "FLUID-5587",
      "summary": "Framework should support namespaced options distributions rather than an array"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5813/",
      "key": "FLUID-5813"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5824/",
      "key": "FLUID-5824"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-04-15T09:02:11.803-0400",
      "body": "A problem resulting from lack of this feature was reported in IRC at <https://botbot.me/freenode/fluid-work/2015-04-13/?msg=36502682&page=1> . Note that whilst the new \"contextAwareness\" scheme would allow this problem to be solved, it is a little heavyweight for the situation described in the channel, where one merely had a tooltip in a particular context that required some custom styling.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T14:00:27.561-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
The old "polymorphism at a distance" system, "demands blocks", at least had a well-defined (if not entirely usable) system for arbitrating priority of different "advice" entered into the system - this was inspired by CSS's scheme for priority based on number of matching clauses in the selector.

In theory, our IoCSS based system should be an even better fit for the CSS priority scheme, but in the meantime we have gathered more experience and our thinking has moved on. With <https://fluidproject.atlassian.net/browse/FLUID-5587#icft=FLUID-5587>, we have supplied well-defined and stable names to distributions via namespaces which will allow a more principled and flexible priority scheme, based partly on the <https://fluidproject.atlassian.net/browse/FLUID-5506#icft=FLUID-5506> constraint system, to be implemented. It's crucial that any creator in the system has full ability to adjust their priority to any arbitrary position relative to all previously registered (by him) creators without having to pervert their expression through schemes such as "clause duplication" which are, for example, recommended in resources such as <http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/>&#x20;

The base scheme for distribution priority derives "fixed priorities" (that is, the equivalents of numeric priorities for <https://fluidproject.atlassian.net/browse/FLUID-5506#icft=FLUID-5506> listeners) based on a "topological metric" in the component tree - a distribution which has a shorter path between the source and the target takes priority over one with a longer path.

Following these, we allow relative "constraint-based" priorities (using the same syntax and implementation as <https://fluidproject.atlassian.net/browse/FLUID-5506#icft=FLUID-5506>) to allow any distribution to choose its priority relative to any other, based on the namespace of the other distribution.

For example,

distributeOptions: {\
oneDistribution: {\
record ....\
target ....\
priority: "after:anotherDistribution"\
}, {\
anotherDistribution: {\
record .....\
target ...\
}\
}

shows two distributions, one of which explicitly defers to the other. Note that this priority is resolved amongst all distributions competing for the same **target** at a particular time, not amongst those from a particular **source**.

        