---json
{
  "title": "FLUID-6132",
  "summary": "Cannot bind to DOM binder methods via IoC",
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
  "date": "2017-02-21T09:56:15.521-0500",
  "updated": "2024-07-22T10:35:22.030-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-02-21T15:04:33.995-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/814> has been merged into the project repo master branch at 095ff9ff2dd760b145f2551b3229046ee0513e36\n"
    }
  ]
}
---
As a result of various implementational drifts and "cute" implementational choices, it is not possible to bind to the DOM binder's function's via IoC references. For example, a reference of the form `{that}.hostComponent.dom.fastLocate` does not resolve to the DOM binder's `fastLocate` method, but foolishly returns a zero-element jQuery.

This is the result of two architectural trainwrecks co-occurring - firstly, the implementation for <https://issues.fluidproject.org/browse/FLUID-5821> fixed the contract in this case in the wrong way. In fact, asking for a selector which has not been configured at all should return no kind of jQuery but simply `undefined`.

Secondly, we "cutely" subvert the IoC resolution machinery to allow expressions of the kind `{that}.dom.selectorName` to resolve onto the fetched jQuery. Unfortunately the "fallback" mechanism, implemented via the `resolvePathSegment` hack at <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/FluidView.js#L212> could only proceed to try concrete resolution in the case the return value is `undefined`. The faulty return of the zero-element jQuery would block the search for a further scheme for value resolution. Unfortunately, as the final element of the wreck, the "fallback" resolution within `fluid.get` which used to appear at <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/Fluid.js#L968> has been removed. The mere presence of a `resolvePathSegment` method will block resolution of a concrete member.

The cleanest way out of this difficulty would be to move the "real" DOM binder to an unrelated path, e.g. at `{that}.domBinder`, and then leave `{that}.dom` as a plain {} with simply the `resolvePathSegment` method.

        