---json
{
  "title": "FLUID-5717",
  "summary": "Merge policies contributed via dynamic grades do not operate correctly",
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
  "date": "2015-07-27T11:42:31.041-0400",
  "updated": "2017-02-27T15:49:12.500-0500",
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
      "url": "/browse/FLUID-5615/",
      "key": "FLUID-5615"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T10:08:18.029-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
Merge policies which are contributed from dynamic grades do not act in time to be seen by dynamic raw grade computers. This was discovered during testing of the <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> branch, particularly with respect to the new <https://fluidproject.atlassian.net/browse/FLUID-5241#icft=FLUID-5241> contextAwareness scheme.&#x20;

We have:&#x20;

fluid.defaults("demo.prefsEditor.progressiveEnhancement", {\
gradeNames: \["fluid.contextAware"],\
contextAwareness: {\
textToSpeech: {\
checks: {\
supportsTTS: {\
contextValue: "{fluid.supportsTTS}",\
gradeNames: "demo.prefsEditor.auxSchema.speak"\
}\
}\
}\
}\
});

Which is then constructed via

var prefsEditor = fluid.prefs.create(".flc-prefsEditor-separatedPanel", {\
build: {\
gradeNames: \[\
"fluid.prefs.auxSchema.starter", // this will add the starter set\
"demo.prefsEditor.auxSchema.simplify", // this will add the simplify adjuster and enactor\
"demo.prefsEditor.progressiveEnhancement" // progressive enhancment\
],\
primarySchema: demo.prefsEditor.primarySchema\
}\
});

The mergePolicy of&#x20;

mergePolicy: {\
contextAwareness: "noexpand"\
},

is not seen when fluid.contextAware.check executes as part of the raw dynamic grade resolution.

        