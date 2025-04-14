---json
{
  "title": "FLUID-5668",
  "summary": "Corruption when material written for \"members\" requires merging",
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
  "date": "2015-05-21T10:59:41.984-0400",
  "updated": "2021-08-08T13:56:51.698-0400",
  "versions": [],
  "fixVersions": [
    "6.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4932/",
      "key": "FLUID-4932",
      "summary": "Add support for a wildcard mergePolicy."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5208/",
      "key": "FLUID-5208",
      "summary": "Root reference to events and listeners blocks should be specifiable using IoC reference"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4930/",
      "key": "FLUID-4930",
      "summary": "Correct \"ginger world\" algorithm so that it behaves correctly in cases of \"retrunking\" - clarify semantics for full evaluation"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4982/",
      "key": "FLUID-4982",
      "summary": "Implement \"globally asynchronous ginger world\" aka \"wave of promises\" allowing arbitrarily asynchronous progress through the ginger algorithm"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5381/",
      "key": "FLUID-5381",
      "summary": "Support the escaping of dots in object paths for mergePolicy"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4925/",
      "key": "FLUID-4925",
      "summary": "Implement \"wave of explosions\", eagerly instantiating all component shells before their contents"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5226/",
      "key": "FLUID-5226",
      "summary": "fluid.isPlainObject() is not powerful to detect objects which are only exotic by virtue of constructor"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5249/",
      "key": "FLUID-5249",
      "summary": "Rationalise handling of \"instantiators\" to produce by default only one per Fluid context"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6457/",
      "key": "FLUID-6457"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5508/",
      "key": "FLUID-5508"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T10:05:00.603-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-04-12T17:54:24.244-0400",
      "body": "See <https://fluidproject.atlassian.net/browse/FLUID-5887#icft=FLUID-5887>, <https://fluidproject.atlassian.net/browse/FLUID-5800#icft=FLUID-5800> - our approach to \"members\" is still woefully wrong, especially when expanders can arise through multiple points in the grade hierarchy.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-05-08T13:51:45.169-0400",
      "body": "See discussion on \"local MergePolicy\" aired in IRC at <https://botbot.me/freenode/fluid-work/2015-09-11/?msg=49513398&page=1> - it's hard to imagine resolving this issue without such a scheme\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-08-12T11:48:01.430-0400",
      "body": "A partial fix for this is in trunk (at the 2.0 level) but we will keep this issue open since fixing this fully requires the <https://fluidproject.atlassian.net/browse/FLUID-4925#icft=FLUID-4925> rewrite\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-01-12T09:15:06.154-0500",
      "body": "@@Antranig Basman, would this shortcoming also explain why I can't use {arguments}.1 when setting up a member variable in a dynamic component?\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-01-12T10:08:04.328-0500",
      "body": "Just to clarify, this demonstrates what I mean:\n\n<https://gist.github.com/the-t-in-rtf/6a85c3cf9676d227748a20180a09b929>\n\nThe dynamic component that expects to initialise a member variable causes a failure, as {arguments}.0 is not expanded in the process of creating the component's options, but is rather left to the new component itself to make sense of.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2021-08-08T13:56:51.698-0400",
      "body": "Dealing with expansion semantics in such a fundamental way has been pushed off until the 6.x rewrite where the entire options pipeline will be rewritten using mats.\n"
    }
  ]
}
---
This was discovered when updating the prefs framework test cases written for <https://fluidproject.atlassian.net/browse/FLUID-5599#icft=FLUID-5599> to function with the  modern <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> framework branch. These had originally been written in a "demands block" style - but the test definition had been updated to use a distributeOptions directive:

```javascript
fluid.defaults("fluid.tests.prefs.diffInit", {
        distributeOptions: {
            record: {
                theme: "wb",
                textFont: "times"
            },
            target: "{fluid.prefs.prefsEditor}.options.members.initialModel"
        }
    });
```

and the prefs editorLoader definition uses the following subcomponent definition to inject the initialModel down:

```javascript
components: {
            prefsEditor: {
                type: "fluid.prefs.prefsEditor",
                options: {
                    members: {
                        initialModel: "{prefsEditorLoader}.initialModel"
                    },
```

The test cases adds a mixin grade to the loader to adjust its initial model:

```javascript
fluid.defaults("fluid.prefs.initialModel.localeStarter", {
        members: {
            initialModel: {
                locale: "fr"
            }
        }
    });
```

These two definitions targetted at the "initialModel" member end up creating "mouse droppings" in the final member value, where the reference&#x20;

```java
"{prefsEditorLoader}.initialModel"
```

rather than being resolved, is "exploded" into an array of characters before being merged in.

Interestingly, the test cases for this issue were too weak to detect the problem, and it was only noticed while stepping through the implementation in the debugger. Given that the algorithm for evaluating "members" is the same as in the old framework, it is very likely that this bug has always been present.

The evaluation of "members" is unfortunately awkwardly linked with many sensitive parts of the framework's workflow, given that all three of the crucial definitions for a "modelComponent" (model, applier, and modelRelay) are cast as "members". The aim was to enable all of the implementation for this grade to be done using standard facilities of core IoC and not to pollute it with special cases. The current implementation of "members" indeed does not supply the standard framework workflow for the underlying component options - instead, they are marked as "noexpand" along with all of the other framework builtins. The resulting record is then slung directly into fluid.expandOptions via the "fluid.memberFromRecord" strategy point:

```javascript
var value = fluid.expandOptions(memberrec, that, null, null, {freeRoot: true});
```

This touches on several other sensitive framework issues. For example, there is the relation to <https://fluidproject.atlassian.net/browse/FLUID-5208#icft=FLUID-5208>, "Root reference to events and listeners blocks should be specifiable using IoC reference" - this is a directly analogous issue, since the main loss through the simpleminded approach of performing manual merging and expansion is the loss of the ability to customise the mergePolicy for nested material. However, the current framework implementation has never clearly supported the ability to specify nested mergePolicies in any case (see <https://fluidproject.atlassian.net/browse/FLUID-5381#icft=FLUID-5381>, <https://fluidproject.atlassian.net/browse/FLUID-4932#icft=FLUID-4932>) so this doesn't represent a current loss.

Secondly there is the relation to <https://fluidproject.atlassian.net/browse/FLUID-5226#icft=FLUID-5226> and our ability to detect "material exotic by virtue of a custom constructor". As part of this work, we've succeeded in understanding the strategy of the standard jQuery code and can fold this into the framework - this is related to the strange "special branch" of fluid.expandOptions used by fluid.memberFromRecord using the field "freeRoot. The first effect seen once we started to move the options backing "members" to a standard workflow was the corruption of the "thisist thing" defined in an IoC test case:

```javascript
members: {
            "thisistThing": {
                expander: { funcName: "fluid.tests.makeThisistThing" }
            }
        },
```

Finally, it appears that the relations of those three core members of "modelComponent",

```javascript
members: {
            model: "@expand:fluid.initRelayModel({that}, {that}.modelRelay)",
            applier: "@expand:fluid.makeHolderChangeApplier({that}, {that}.options.changeApplierOptions)",
            modelRelay: "@expand:fluid.establishModelRelay({that}, {that}.options.model, {that}.options.modelListeners, {that}.options.modelRelay, {that}.applier)"
        },
```

can no longer be disentangled if "members" was moved to the standard workflow. The result is that the attempted evaluation of "members.modelRelay" then attempts to trigger the valuation of "applier" which then triggers evaluation of "members.applier" - which then corrupts the "in creation marker" (!!) assigned to top-level "members" by the merging workflow. This relates to FLUID-4930 and implies that this issue is alive and well despite not being observed in practice for over 2 years. The fact that we can re-trigger this issue by change in status of "members" implies that it is still only a matter of time before some suitably complex series of user definitions ends up triggering it too. There is no way to resolve this set of linked issues without the wholesale reform of the framework planned in FLUID-4925 and <https://fluidproject.atlassian.net/browse/FLUID-4982#icft=FLUID-4982>.&#x20;

In the meantime, this has shed some clearer light on the way in which the current order of evaluation of options in the framework is problematic. We will write up observations on the wiki at <http://wiki.fluidproject.org/display/fluid/Framework+Evaluation+Order%2C+old+and+new> - in particular, it seems that the current overall workflow of evaluating all overall options FIRST (and also triggering an eager, aggressive expansion of all options VERY FIRST), and then only operating mounted material (via "records) NEXT is entirely wrong - we need a data-driven approach whereby we first trigger a SHALLOW evaluation of options to the top-level required in order to instantiate, say, "members and invokers", and THEN trigger a data-driven evaluation and expansion of their underlying options, and only THEN FINALLY evaluate all currently unevaluated options. This implies moving the framework over to an explicit "worklist discovery model" whereby the "fringe" of unexplored options has an explicit, flat representation. We should combine this at the same time with the "monomorphising" scheme that was found to significantly improve performance in the <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> work on expanders.

        