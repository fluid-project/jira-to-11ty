---json
{
  "title": "FLUID-4914",
  "summary": "Should be possible to match a demands block context name against any element in a grade hierarchy",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2013-02-05T04:43:55.180-0500",
  "updated": "2014-03-03T12:27:10.420-0500",
  "versions": [
    "1.4"
  ],
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
      "url": "/browse/FLUID-4636/",
      "key": "FLUID-4636",
      "summary": "Allocation of \"nickName\" for components is not responsive to all sources of options"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-02-19T14:50:28.405-0500",
      "body": "Resolved by merge of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> branch at revision 91d5d1\n"
    }
  ]
}
---
A crucial requirement for polymorphism is to resolve a context name onto any grade name in a component's hierarchy. A paradigmatic case, for example, is GPII's "dataSource" hierarchy -&#x20;

fluid.defaults("gpii.dataSource", {\
gradeNames: \["autoInit", "fluid.littleComponent"],\
components: {

modelParser: {\
type: "gpii.dataSource.modelParser"\
}\
},\
invokers: {\
get: "gpii.dataSource.get"\
},\
nickName: "dataSource", // framework bug FLUID-4636 - this is not resolved\
});

fluid.demands("gpii.dataSource.modelParser.parse", "gpii.dataSource.modelParser", {\
args: \["{dataSource}.options.responseParser", "{arguments}.0"]\
});

gpii.dataSource.preInit = function (that) {\
that.nickName = "dataSource"; // work around FLUID-4636\
}

etc. - it is a clear expectation of any concrete standin for dataSource that the demands block appearing above, for example, should continue to resolve, even if its concrete class is different. Historically the only means of dealing with this situation has been manual application of a "nickName", the only available source for user customisation of context names. To add insult to injury, due to a further bug FLUID-4636 it was impossible even to write this in component options but it had to be stuck in using a preInit function as above.

All the full names and nicknames for all names through the grade hierarchy should be available for matching as context names.

        