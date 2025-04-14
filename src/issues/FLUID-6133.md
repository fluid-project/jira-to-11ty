---json
{
  "title": "FLUID-6133",
  "summary": "Implement generalised, schematised solution for universal keyboard accessibility",
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
  "date": "2017-02-22T18:15:43.444-0500",
  "updated": "2017-02-28T12:36:01.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1313/",
      "key": "FLUID-1313"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1854/",
      "key": "FLUID-1854"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-305/",
      "key": "FLUID-305",
      "summary": "Provide a shared means for configuring keyboard bindings for all Fluid components"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Our historical keyboard accessibility plugin, held at <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/jquery.keyboard-a11y.js> , is very long in the tooth and has also historically fallen between many stools. Its peculiar naming and coding style reflects the ambition that it might one day be contributed into jQuery core, but the weaknesses of the jQuery plugin model for componentisation implied that it could never become sufficiently powerful to generously repay the costs of using it. Also, it suffers from various infelicities of its own devising, reflecting our incomplete understanding of accessible, flexible web application design at the time (2008-2009) as well as insufficient experience of designing complex, composable applications that are keyboard navigable. We never even succeeded in migrating its docs <https://wiki.fluidproject.org/display/docs/Keyboard+Accessibility+Plugin+API> over to our new docs site at <http://docs.fluidproject.org/infusion/development/>&#x20;

We're in a position to make a better job of implementing this functionality now, and whilst the costs of working with the framework still don't imply we can produce a solution which is considered affordable for others, we can at least characterise the problem better to ourselves and provide a workable schema or blueprint for a more complete solution.

As well as the following ancestral JIRAs we've accumulated against the historical keyboard-a11y plugin:

<https://issues.fluidproject.org/browse/FLUID-305> - shared means for keyboard binding for all Fluid components - essentially the ancestor issue to this one\
<https://issues.fluidproject.org/browse/FLUID-1854> - standard keyboard shortcuts for all components\
<https://issues.fluidproject.org/browse/FLUID-1313> - awkward to configure "additionalBindings"

we have the following fairly profound implementational gaps:

Firstly, almost as soon as the keyboard-a11y plugin was implemented, it began to need to be subverted. Our first moderately ambitious Infusion component, the Reorderer, had advanced keyboard navigation requirements, matching its somewhat generalised conception - it existed in 3 major flavours which could reorder 1-dimensional structures either as lists (in two orientations) or grids, or 2-dimensional structures as "module" or portlets. All these different structures had widely different keyboard a11y requirements, which led to the Reorderer having to take over almost all keyboard handling functions for itself. We retained a vestige behind of the keyboard-a11y plugin's implementation because we still believed in some of the special-casing we had done in order to patch around some platform issues, as well as to operate our "container throws focus onto selected element" workflow which juggled tabindices.

In practice the platform issues have almost certainly gone away in the meantime, and we no longer thoroughly believe in the "container onto element" workflow, at least not in the precise form implemented in the plugin. To start with, this was hardwired with a pretty primitive "focus is leaving container" check:

```java
// Catch Shift-Tab and note that focus is on its way out of the container.
            if (evt.shiftKey) {
                selectionContext.focusIsLeavingContainer = true;
            }
```

and was in various other ways also unprepared for a world in which the navigated DOM domain was composite - with the elements themselves perhaps representing nested selectable domains. In this model, the simplistic focus tracking and tabindex juggling performed by the component fails. Unfortunately the "nested reorderers demo" was the victim of a purge some years ago (surviving only in the form of an automated test case) but I seem to remember at the time that it could be used to exhibit some of these problems.

Some more of the blueprint for a generalised keyboard-a11y solution could be recovered from the rather tangled functions fluid.reorderer.handleDirectionKeyDown (and more advancedly, fluid.reorderer.handleKeyUp) held at <https://github.com/fluid-project/infusion/blob/master/src/components/reorderer/js/Reorderer.js#L371> - these functions, decoding modifiers (still encoded as raw function handlers) and "keysets" into requirements for some geometric motion, should have been possible to integrate into the workflow of the keyboard-a11y plugin had it been possible to factor it well enough.

The confused relationship between the Reorderer and the keyboard-a11y plugin was also exacerbated by the fact that neither of them was particularly factored to a (public) model-based idiom - the plugin because it was impossible as part of the jQuery plugin model, and the Reorderer because of accidents of its factoring which led to some configurations being (somewhat) modelised (the ModuleLayout at least stores some public state in a member named "layout") and some not (the plain list layout simply uses the DOM as its state). Our new formulation of keyboard-a11y functions needs to full externalise the selection and focus state that it is aware of as part of properly externalised, modelRelay aware model definitions, as is part of our modern implementation idiom. Until we can reduce the runtime costs of using the framework, this will discourage adoption of the resulting plugin, but at least its primitives in the meantime will be visible through externalisation schemes such as the Nexus, etc.

        