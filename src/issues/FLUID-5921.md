---json
{
  "title": "FLUID-5921",
  "summary": "Add \"preInspection\" logic to every execution of fluid.require",
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
  "date": "2016-06-17T21:01:44.596-0400",
  "updated": "2016-06-17T21:01:44.596-0400",
  "versions": [],
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
A relatively recent improvement (late 2015) to Infusion's node.js support was the "preInspection" system whereby Infusion on startup will look up the directory structure from its own position, looking for a point which meets the criteria for being an npm module base - without necessarily meeting node's criteria for being a loadable module - that is, it contains a package.json file which is parseable as JSON and has a "name" member.

This has allowed us to ease the numerous annoying situations where code within a module tries to resolve the overall module, but cannot load itself since it has not been checked out within a `node_modules` directory. This has been useful but has always felt peculiarly special-cased, and clearly part of some more general idiom for preInspection.

After fixing the headline failure in <https://issues.gpii.net/browse/GPII-1852> we ran headlong into an issue directly exposing how the preInspection system needs to be generalised. Inside the testRegistryResolver.js tests, we had written a line&#x20;

```javascript
fluid.require("%gpii-windows");
```

which morally should have worked - unfortunately as part of <https://issues.gpii.net/browse/GPII-1848> we were testing a configuration where infusion had become "out of line" with gpii-windows. Our system of "loading infusion via universal" is in fact quite wacky and should be discontinued itself. However, it's likely that other varieties of this situation will arise.

What should happen here is that we extend our "last-ditch" branch in fluid.require at <https://github.com/fluid-project/infusion/blob/master/src/module/module.js#L135> to make a "preInspection" run from the caller's location - which we can now assess via the patched node-aware fluid.getCallerInfo() which this algorithm already depends on.

        