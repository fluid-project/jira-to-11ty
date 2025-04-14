---json
{
  "title": "FLUID-6689",
  "summary": "Configuring the UIOptions store conundrum",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-10-20T10:58:29.123-0400",
  "updated": "2021-10-20T10:58:29.123-0400",
  "versions": [
    "5.0"
  ],
  "fixVersions": [
    "6.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
This issue writes up a design conundrum (a multi-author story that the IL framework is intended to handle) that arises in the design of UIOptions.

The notion is that the default creator, e.g. fluid.uiOptions is a "one stop shop" for someone who wants to build a page with some kind of functioning interface and placeholder persistence - e.g. cookie-based. But that this creator can be overridden with more specific choices about the store, e.g. that it connect to a real preferences server with some credentials.

The issue here is how these decisions get arbitrated, and how things end up at different addresses in the component tree. Right now we use the Infusion 1.x "hack" of nominating a "fluid.resolveRootSingle" component which gets pushed to the top of the component tree when it gets created - we call this the "globalSettingsStore" and every prefs editor and enhancer will bind to it through its visibility.

But this is done in a cack-handed and "imperative" way - any other component which is found at this path will simply get knocked off - and if references have resolved to it during the construction of a component which consumes it, they will get stuck referring to the stale one. This is part of why we avoid caching component references anywhere in the tree, and hope that we can push this resolution into invoker and listener arguments, etc. - but still there is a risk of inconsistency of having this replaced - as well as the basic problem that this is authorially incoherent.

The cookie settings store, e.g. is a "default" - and so it's not enough to simply overwrite the root component, you also have to overwrite the configuration sent to fluid.uiOptions - which means you have to know where it is.

It should be possible to express that the store configuration supplied as the default packaging of fluid.uiOptions is simply a "default" - and so that if some other more specific store has **already** been configured by the user, fluid.uiOptions will not try to knock it off.

This seems to appeal to multi-author features planned for Infusion 6.x as part of the "tangled mat" system - that is, the author tracking that comes with the fluid.uiOptions defaults also encodes that this global definition sent to top level is merely a "default" - and so if something is already there, it will "slip under the mat", possibly disappearing completely, if there is already a store there.

But as well as the mat system itself, we also need a more principled system for expressing that some component should be constructed at some other part of the tree rather than its point of construction. Right now we would express this with options distributions of some kind - and so it seems that some modern variant of that could arrange for "mat injection to an arbitrary point" - together with our already standard lifetime scoping semantics, that the injected material would disappear if the source site is destroyed.

Nonetheless we should try to think about any ways this story could be made better in the Infusion 5.x rewrite of the prefs framework.

        