---json
{
  "title": "KETTLE-78",
  "summary": "Implement grade-based static request handling architecture aka \"eternals\"",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Pull Request",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-07-18T19:28:56.712-0400",
  "updated": "2019-07-18T20:38:24.596-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Through two separate routes, it has appeared that our request grade-focused scheme for configuring request handlers in Kettle can lead to verbose and inefficient configuration.

Firstly, when working in "Fluid authoring" for the "Visible nexus" at <https://github.com/amb26/fluid-authoring/blob/FLUID-4884/src/server/js/VisibleNexus.js#L19>, it appeared that configuring multiple instances of static middleware together with indexing led to poorly factored and convoluted configuration. This is because at one end, "requestHandlers" within the kettle.app is not a grade definition and cannot have its common entries (method, route, etc.) inherited, and at the other end, one can only configure a request handler with respect to its request grade even if the only variable material (in this case, a piece of static middleware) is request-static.

 

Secondly, when working on performance improvements for schema-based request validation in <https://issues.gpii.net/browse/GPII-4009>, Tony Atkins \[RtF] noticed a significant penalty for placing request-specific definitions in the request grade, which ought to have been unnecessary since the validation action was actually request-static.

 

These kinds of use cases indicate a need for a new kind of Kettle artefact, a request-specific but static component. This will be named `kettle.staticRequestHandler` and whilst in many respects it will simply be a structural sugar for all of the already supported definitions in `kettle.app`'s `requestHandlers`, it will actually introduce a fundamentally new component topology in that each staticRequestHandler's request components will be nested in it rather than being pooled in the app's area for all requests. This will enable options distributions, etc. to easily establish an association between the request component and its parent staticRequestHandler (SRH), hopefully eliminating a large number of cases where we needlessly push definitions into the request. In classic uses of SRH, the user doesn't define a new `kettle.request` grade at all, and makes do with the basic default (in the case there is no interesting request-specific handling) or just configures the \`handleRequest' invoker of the request grade in isolation.

Whilst the name correctly suggests that one of the primary uses of SRH will be for hosting the "static middleware", there will be numerous other uses too, and in fact all but the most highly configured, stateful requests should be configured in terms of it. In fact the use of SRH doesn't preclude using the old method of declaring a `kettle.request` grade, this can be done by overriding its `handlerType` option to refine the default from `kettle.request.http`, etc. 

This style of configuration is particularly unlikely to be suitable for WebSockets endpoints with their very long-lived request objects, so all of the configuration has been focused on the `kettle.request.http` hierarchy.

        