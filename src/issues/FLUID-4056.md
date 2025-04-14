---json
{
  "title": "FLUID-4056",
  "summary": "Implement \"accessors\", tying all of Fluid's machinery for model access into a condensed package",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-02-10T01:40:38.879-0500",
  "updated": "2015-06-09T12:43:14.577-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4852/",
      "key": "FLUID-4852",
      "summary": "Break out configuration for escape-aware EL parsing functions for accessor strategy used in Model Transformations"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T10:33:50.381-0400",
      "body": "@@Antranig Basman could you please determine if this jira is still relevant?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-06-09T12:43:14.577-0400",
      "body": "Yes, still somewhat relevant although not very urgent. There's an annoying and increasingly wide gap between the access semantics operated by fluid.get/fluid.set and the ChangeApplier API. These used to be more in line, but with the model relay work, the ChangeApplier semantic has now diverged significantly from fluid.set, and is likely to diverge much further in future - see notes on <https://wiki.fluidproject.org/display/fluid/New+New+Notes+on+the+ChangeApplier> especially with regards to \"immutable application\". This is not terribly urgent because increasingly we will be focusing on semantics for non-users of APIs - either because they are using declarative configuration, relay, or change rules, or else they are outside the JS VM altogether, e.g. via the Nexus. I doubt that we will produce a component \"fluid.accessor\" as this JIRA suggests, but we will certainly do something to rationalise our APIs in this area.\n"
    }
  ]
}
---
Infusion is accumulating various pieces of machinery for implementing the "transparent state idiom". Recent work has factored off variable piece of the implementation of the core framework utilities "fluid.get" and "fluid.set" into reusable and autonomous mini-components known as "resolvers" and "strategies". **modification** of state, on the other hand, is managed by a separate piece of machinery known as the "change applier" (which is layered on top of the former get/set layer). Increasingly elaborate uses of the model idiom (for example, the upcoming "globally ginger world") will be helped by having all of the pieces of a "transparent model accessor system" which share common configuration in one place. This will be a self-standing component named "fluid.accessor".

This work will also help with integration with upcoming language features in ECMAScript 6, "proxies" - the common state underlying a "transparent state standin proxy" will be what is currently called a "trundler + accessor". The "member access operator" will then become implemented in terms of a "trundle" operation, whereas other operations (e.g. assignment, deletion) will be forwarded to other members of the accessor structure (e.g. the changeApplier) - also, a forthcoming operation to allow interception of key iteration.

        