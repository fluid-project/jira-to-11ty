---json
{
  "title": "FLUID-6584",
  "summary": "Failure when sourcing dynamicComponents from the DOM with new renderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-12-14T07:10:17.230-0500",
  "updated": "2024-07-17T08:13:17.967-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2020-12-14T07:11:56.137-0500",
      "body": "This was encountered when implementing the Covid \"data monitor\" app at <https://github.com/amb26/covid-data-monitor> - the \"built\" configuration uses a templateRenderingView to load the entire UI markup from a template which then contains a Pager and the summary component described above.\n"
    }
  ]
}
---
The following construction in the Pager now causes problems in the <https://fluidproject.atlassian.net/browse/FLUID-6580#icft=FLUID-6580> era framework (and probably also fails with the current <https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145> branch) where its parent is a "modern" viewComponent which resolves its DOM container during startup. The simplest way of doing this is to apply a fluid.containerRenderingView or fluid.templateRenderingView to a parent component of a pager - we will then receive a failure if the tree contains a ResourceLoader as it tries to bind onto its onResourceError event in makeResourceFetcher:

```java
fluid.resourceLoader.makeResourceFetcher = function (that, resourceSpecs, userResourceOptions, transformResourceURL) {
...
            resourceSpec.onError.addListener(that.events.onResourceError.fire);
```

The problematic construction is in the Pager's summary subcomponent:

```java
fluid.defaults("fluid.pager", {
        gradeNames: ["fluid.viewComponent"],
....
        dynamicComponents: {
            summary: {
                sources: "{that}.dom.summary",
                type: "fluid.pager.summary",
                container: "{source}",
```

The reference to {that}.dom.summary during component discovery triggers contruction of all the DOM containers very early during fluid.processComponentShell before any workflow has started and before any events have constructed.

Thought has washed backwards and forwards over this a few times. A first impulse is to ban markup-driven components like this entirely. We had thought of inviting authors using the Pager to simply inject fresh summary subcomponents and selectors into it rather than expecting to jam everything into a single selector resolution.

On the other hand, markup-driven structure like this might seem to be key to our progressive enhancement mission. Another notable place where we expect to hit scattered component containers with the same selector is the inlineEdit component. This is also a corner which is badly bodged, as we try to make many components appear like one, but the fluid.inlineEdits driver just about achieves this.

On the other hand, we have a significant problem with the interpretation of selectors which hit multiple elements. For "new renderer" components, these elements are all expected to be (very nearly) contiguous and all children of the same parent - in order to give rise to a dynamic collection of rendered siblings in the old "repeatingSelectors" style.

Also, our progressive enhancement mission doesn't sit very squarely with a realistic approach to "general authorship". It's clear that we can't produce a system which will author "general markup" since the affordances of arbitrary HTML are too hard to bound. In practice we expect to author, rather, component trees targetted at a more restricted universe of markup, similar to WordPress' "blocks" system only with rather more freedom.

However, light progressive enhancement of arbitrary markup still seems like an important, if distinct, use-case, and we should in theory not throw it out without a struggle. It seems like we now have sufficient declarative insight in order to distinguish how a selector is being used through introspecting on the nature of the "sources" reference - if it is a model reference, we are model-driven and are operating the contiguous binding model, and if it is a DOM reference, we can still allow scattered containers.

However, we still need to do something explicit to break the startup race. In theory the workflow system is sufficiently robust to accommodate components arriving even later than we previously tolerated them - that is, during the onDomBind event of some rendered markup, rather than during the resolveResourceModel phase which is the current official last point. Note that we of course permit "createOnEvent onCreate" components but these currently give rise to a separate workflow stack - this would be ok for these markup-driven components too since their transactional requirements are likely to be weak.

We also would need to distinguish the possibly two invocations of onDomBind. We receive only one for plain containerRenderingView components, but might receive two for "new renderer" components (pending descision during rewrite to eliminate the "virtual DOM"). There would be a new kind of "deferred component" that would push evaluation of DOM-backed dynamic component sources to the latest onDomBind invocation during startup.

        