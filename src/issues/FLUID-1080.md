---json
{
  "title": "FLUID-1080",
  "summary": "DOM Binder: Implement an API that handles the work of fetching elements from the DOM for components.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2008-07-31T17:19:42.000-0400",
  "updated": "2011-02-22T16:27:56.710-0500",
  "versions": [],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-07-31T17:19:55.000-0400",
      "body": "infusion-05-wishlist\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-08-08T20:55:42.000-0400",
      "body": "Implemented initially at revision 5313 but gradually taking shape through 5335. \\\ncreateDomBinder is now a top-level method in Fluid.js, invokable either in isolation or else automatically through the standard Fluid initialisation call fluid.initView.\n\nWill accept either selectors or direct functions as specifiers of  \"Dom Parts\".\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:56.709-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
At the moment, component developers tend to write a fair bit of boilerplate code to access known, named things from the DOM. If done properly using parameterized selectors, this requires several data structures to to be in scope and is often a source of omission errors.

The DOM Binder API should provide a simple face on the DOM for component developers. Components should only concern themselves with referring to the names of "interesting things" in the DOM, rather than the mechanics of finding them in a safe way. The DOM binder should take care of merging the default selectors with the user's overrides and providing the connection to the DOM. It should also shield developers from the work of determining if an argument is a jQuery, a dom element, a list of elements, or a selector. Thus, outside users can provide interesting things in whatever form suits them best, but the component developer doesn't have to manage the complexity.

A sketch of this API is documented here:

<http://wiki.fluidproject.org/display/fluid/Architecture+Sketches>

And "vestigial" versions of the DOM Binder can be found in the Undo service.

dev-iteration40

        