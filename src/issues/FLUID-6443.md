---json
{
  "title": "FLUID-6443",
  "summary": "Support dynamic re-localization of prefs framework components",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2019-12-18T13:49:06.651-0500",
  "updated": "2020-01-13T15:30:08.702-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
This requires the changes from the FLUID-6148 line of work, and should likely also wait on the FLUID-6420 work to before implementing.\
 \
Suggestion from Antranig in the \[fluid-work channel today|<http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2019-12-18.log>:]\
 \
Right now there are two ways of using ResourceLoader resources - the "dynamic path" involves referring to them regardless of whether they have loaded, via a model reference or a messageResolver reference, etc.\
 \
And the "static path" involves the pattern that we generally use in UIO since its usage of ResourceLoaders is based on the legacy system, whereby you explicitly wait for the onResourcesLoaded event to fire\
 \
In the static path you simply get the value of the resource as it has loaded and don't get the benefit of any dynamic updates\
 \
So every UIO panel has one of these attached: <https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/js/Panels.js#L74>\
 \
It gets its "messageBase" via this distribution: <https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/js/Panels.js#L82>\
 \
Now all of these messageBase values get baked into the component via the AuxBuilder here: <https://github.com/amb26/infusion/blob/FLUID-6145/src/framework/preferences/js/AuxBuilder.js#L474>\
 \
Although there seems to be some confusion here since it looks like these panels separately inherit directly from the parent bundle via the prefsEditorConnections grade: <https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/js/Panels.js#L655>\
 \
I think the best thing to do would be to hoist an actual test case demonstrating relocalisation into the core framework, which would then be more than a "demo" : p\
 \
My suspicion that the best way of fixing this is to improve the strategy in the AuxBuilder which implies some core work by Justin\_o\
 \
Probably the most direct approach is to create a kind of "dynamic path" cut-through that resolves the root message bundle dynamically and early, and then rewire all the references to bind into that, so that even if the current rendering model makes the components look as if they have to wait for the I/O to finish, they can bind to another component that doesn't\
 \
This involves the least upheaval, I think, and lets us keep our existing clunky "strings" model that the old renderer relies on

        