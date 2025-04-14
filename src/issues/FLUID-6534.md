---json
{
  "title": "FLUID-6534",
  "summary": "Failure to resolve \"fast path\" resource should not unconditionally cause component destruction",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-07-23T12:13:56.865-0400",
  "updated": "2020-07-24T09:20:37.862-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "ResourceLoader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6453/",
      "key": "FLUID-6453",
      "summary": "Implement \"unhandled rejection\" behaviour for Fluid promises"
    },
    {
      "type": "Related to",
      "url": "/browse/KETTLE-88/",
      "key": "KETTLE-88"
    }
  ],
  "attachments": [],
  "comments": []
}
---
This issue only affects the in-progress FLUID-6148/FLUID-6145 branches.

Currently, failed resolution of a "fast path" resource in the ResourceLoader (i.e. one which is referred to in a workflow function that must resolve before onCreate, such as a model resource or renderer template) unconditionally causes destruction of the component and indeed the cancellation of the entire component tree transaction which is in progress.\
This is an undesirably aggressive semantic for some use cases - for example where the failure should be signalled in some way or perhaps cause resolution of some kind of fallback resource (e.g. an HTTP error code, or some placeholder markup).

This issue arose in development of the FLUID-5047 "new renderer" and its associated resource mounting via Kettle requests (static and rewriting varieties). If a request is received for a URL which does not have an associated file in the FS corresponding to a renderer template, the resource request fails and the Kettle request is immediately cancelled - since this occurs before it progresses to onCreate where its promise chain is wired up to the express response, this simply causes the connection to reset.

This exposes wider issues relating to how events are geared to promises. A listener to an "onResourceError" event is not in a position to interact with the resource workflow, and further, cannot qualify in order to cancel an "unhandled rejection" message. This at the very least needs to be turned into a promise chain of some kind.

Further, an error was found in the ResourceLoader's "fluid.fetchResources.FetchOne" wrapper, which creates a nonce promise to walk along the resource tree, in which it attempted to forward the resource rejection. Given in practice none of these may be subscribed to, this triggered an unhandled rejection via the new FLUID-6453 semantic - this shows how careful one needs to be with the promise calculus in the new model.

        