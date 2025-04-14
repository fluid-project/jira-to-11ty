---json
{
  "title": "FLUID-6589",
  "summary": "Implement generalised interception scheme for options evaluation",
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
  "date": "2021-01-11T19:29:20.723-0500",
  "updated": "2024-07-17T08:12:26.470-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2021-01-12T11:00:31.669-0500",
      "body": "Note that, following the tidying of \"local mergePolicy\" JIRAs into <https://fluidproject.atlassian.net/browse/FLUID-6590#icft=FLUID-6590> this does seem to be something that could/should be folded into this area of directives. The \"depends-on\" notion might not be wholly misleading, in that we note in the case above, there is no influence between the arguments and results of the related definitions.\n\nHowever, further thoughts - note that we are only in a mess because there is an \"expander\" at all, and we should be clear that an expander is really just a \"cryptic invoker\", and that we plan to abolish/amalgamate invokers by means of \"gyres\" per <https://fluidproject.atlassian.net/browse/FLUID-6365#icft=FLUID-6365> . Therefore it seems that the best route is simply to produce a syntax for what could be called \"inline gyres\" - or at least, \"morally inline gyres\" in the way that modern modelRelay definitions with no transform are now starting to replace implicit (inline) modelRelay definitions.\n\nDeparting from the notion that we write \"expanders\" inline gives us all the authorial advantages we get from explicit modelRelays, that is, a location to write namespaces and priorities: whilst this degrades the experience of those who are authoring configuration in text, this is yet another necessary collateral loss.\n\nParallelism - we now often ceased to write invokers, instead, writing namespaced listeners. We could now cease to write expanders similarly.\n\nThe distinction between \"members\" and other options is another problematic design decision required by authors that we need to get rid of. Recent notion - we could record the fact that some material had been dispatched to an orthochronous consumer (i.e. an arbitrary external \"bad function\") and highlight any attempt to mutate it as a design failure. Material dispatched to blessed \"good functions\" could simply be recomputed.\n\nIf we then unify (most) options and models, this implies reversing the notion that options are immutable - but I guess the <https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145> revolution was primarily a moral one, designed to prevent direct mutation by users rather than via the ChangeApplier.\n\nIf we proxy everything, as it seems that we might have to, in order to implement \"gyres\" and their \"transparent upgrade\" semantics (e.g. attempting to add a listener to something which the \"compiler\" had implemented as simply a method call), it seems that direct mutation could come back anyway, and the ChangeApplier retained as a more or less internal API for those wanting to create otherwise inexpressible changes (\"application into nothing\" and the like).\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2022-06-30T09:23:09.127-0400",
      "body": "Note the connection with the \"syncretic promotion\" of <https://docs.google.com/presentation/d/12vLg_zWS6uXaHRy8LWQLzfNPBYa1E6L-WWyLqH1iWJ4/edit>\n"
    }
  ]
}
---
This afternoon working on the Covid data monitor app, things somewhat came to a head. Having implemented the new renderer component workflow whereby rendering becomes equivalent to simply evaluating the `container` member of every component in the tree, a long rumbling issue has come into clearer focus. Faced with having to integrate a component with an alien rendering idiom, the [accessible autocomplete](https://github.com/alphagov/accessible-autocomplete) widget, it was found to be impossible to express the interception process with respect to the evaluation process in an acceptable way.

This highlights that abolishing and reforming the crustiest part of the framework, "mergePolicies", is an inescapable part of the <https://fluidproject.atlassian.net/browse/FLUID-5304#icft=FLUID-5304> rewrite.

Here is the task - the author of the core framework "container" member has expressed the following:

```java
fluid.defaults("fluid.viewComponent", {
        gradeNames: ["fluid.modelComponent", "fluid.baseViewComponent"],
        members: {
            container: "@expand:fluid.containerForViewComponent({that}, {that}.options.container)"
        }
    })
```

The application author wishes to express - "preserve exactly the original author's expression, returning the same value, but in addition express that a further evaluation must occur exactly at the point of demand, which consumes the component state just after the evaluation".

This is semantically problematic because it is so side-effect-laden - without being able to make use of its "react/preact" bundling, one is forced to consume the integration model of the accessible autocomplete widget where it simply injects some random markup into the container as part of its initialisation. This was previously pretty unthinkable, but since we have decided to do away with the virtual DOM as part of the current renderer rewrite, it might even be compatible with performant rendering of the initial markup as a detached document fragment, depending on what the widget actually expects to be able to do with the DOM during startup.

But in the meantime, we have had to produce the following horrific locution:

```java
fluid.defaults("hortis.autocomplete", {
    gradeNames: ["fluid.viewComponent"],
    members: {
        // widget: "@expand:hortis.autocomplete.render({that}, {that}.options.id, {that}.options.widgetOptions)",
        container: "@expand:hortis.autocomplete.renderContainer({that}, {that}.options.container, {that}.options.id, {that}.options.widgetOptions)"
    },

hortis.autocomplete.renderContainer = function (that, containerOption, id, widgetOptions) {
    var container = fluid.containerForViewComponent(that, containerOption);
    that.widget = hortis.autocomplete.render(that, container, id, widgetOptions);
    return container;
};
```

i) We've had to hoist all the arguments of the downstream activities into our own signature, ii) override the original member declaration with an "omnibus function" which stashes the about to be returned argument in a local dump, and then iii) manually bash what used to be the member declaration as a top-level side-effect scrawl.

What seems undesirable, although superficially compelling, is something like the Spring "depends-on" directive where you could assert that a particular value must be evaluated immediately following (or perhaps immediately previous to) the evaluation of a target.

But here we have a catastrophic failure of open authoring - we can't even express the intent that the original author's definition should be deferred to, but instead have to stuff in a hard-coded duplication of its definition into a private scope.

We have exactly the same issue with respect to model contents, so we had better think up some kind of Edwardian crock that generalises the entire options merging pipeline into some generally interceptable pipeline.

Note that <https://fluidproject.atlassian.net/browse/FLUID-4189#icft=FLUID-4189> calls for something similar - and also that we abandoned the naive kind of "DataSource calculus", fossilised in @@Justin Obara 's "queued DataSource" pull <https://github.com/fluid-project/infusion/pull/566> (very reminiscent of Weiher's "[storage combinators](http://hirschfeld.org/writings/media/WeiherHirschfeld_2019_StorageCombinators_AcmDL_Preprint.pdf)") because it is not effectively interceptable.

If we say that "every option becomes a component", we end up with a kind of endless design regress, but nonetheless something needs to happen to turn the entirety of a component tree into a form of more or less homogeneous material - somehow one that exists in "depth" as well as extension, and in time as well as space.

        