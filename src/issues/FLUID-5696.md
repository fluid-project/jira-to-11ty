---json
{
  "title": "FLUID-5696",
  "summary": "Failure to instantiate ginger subcomponent which is an injection record",
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
  "date": "2015-06-23T22:24:35.812-0400",
  "updated": "2017-02-27T15:49:15.073-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-06-23T22:27:06.347-0400",
      "body": "fluid.cacheShadowGrades has         \\\ncontextHash\\[shadow\\.memberName] = true; // TODO: injected shadows in theory have a different memberName\n\nWe seem to remember having decided that we would ignore alternative member names at other injection sites, but currently hard to reconstruct a sensible reason for this.\n\nThere should be a branch in recordComponent \"else\" which takes account of \"name\" in working through parentShadow\\.childrenScope - and if possible, even manages to ignore the memberName at the source site. Is this sufficient, or do we need to adjust ownScope too?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T10:47:18.238-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
The very long-standing slow branch in fluid.resolveContext which triggers ginger subcomponent instantiation based on lookahead in the component options is faulty -&#x20;

if (fluid.getForComponent(component, \["options", "components", context, "type"]) && !component\[context]) {

since this will only respond to a full subcomponent record rather an injection record.

For example: \
fluid.defaults("souq.chaundles",\
components: {\
tileManager: "{chaundleHolder}.chaundleTileManager",\
},\
modelListeners: {\
"{tileManager}.model.dataTicks.mainWindow": "{that}.refreshView(true)" \
}\
});

It's unclear that the reference via member name will even be effective using the new "fast lookup" scope scheme. Naturally after FLUID-4925 this will work as expected - unclear whether it is worth trying to patch up the old framework.

Note that there is a near-identical check in fluid.makeGingerStrategy above, although this one is used for concrete path segments rather than context names. The comment on this one reads "check is also incorrect and will miss injections" which looks as if it is misplaced and should go on the resolveContext site.

        