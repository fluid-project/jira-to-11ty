---json
{
  "title": "FLUID-6157",
  "summary": "System is required for polymorphic resolution of \"global names\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-05-12T11:19:44.115-0400",
  "updated": "2017-05-12T11:19:44.115-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Historically, many more names in Infusion entered polymorphic resolution - e.g. invoker names and event names themselves. After the framework rewrite of 2013 we have a much simplified system, but lost an important feature, the ability for polymorphic invocation of global names.

 

This has resulted in somewhat silly manual schemes such as the "nameResolver" system in <https://github.com/GPII/universal/blob/master/gpii/node_modules/lifecycleManager/src/Resolvers.js> - 

```javascript
fluid.defaults("gpii.lifecycleManager.nameResolver", {
    gradeNames: ["fluid.component"],
    invokers: {
        resolveName: {
            funcName: "fluid.identity"
        }
    }
});
```

Anywhere where we use such global functions is a point at which interception could be desirable, and in particular we need to be able to apply features such as context awareness rather than constantly forcing users to invent their own polymorphism.

Most likely, we should interpret such global names as morally references onto a context name, say "{functionNames}" which can then be intercepted as normal. These names will resolve statically as usual at construction time of the source, so that there is no runtime resolution impact.

        