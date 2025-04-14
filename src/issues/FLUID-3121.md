---json
{
  "title": "FLUID-3121",
  "summary": "Reorderers confuse handling of 'container' as selector/element",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Chris Hubick",
  "date": "2009-08-21T00:01:00.000-0400",
  "updated": "2009-10-05T16:17:01.000-0400",
  "versions": [
    "1.1.1"
  ],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-21T10:02:28.000-0400",
      "body": "Bug Parade Infusion 1.1.2\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-02T18:33:09.000-0400",
      "body": "We need to get this fix in soon, and Joan is away on Fridays. Antranig, it's all yours.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-10-05T00:55:56.000-0400",
      "body": "Fixed at revision 8226 - the core failure is really in fluid.reorderer itself which should satisfy the looser contract and take care of dereferencing by itself. JS docs are updated, but we need to ensure that wiki docs are fixed for the release.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-05T15:34:56.000-0400",
      "body": "I've reviewed Antranig's fix for this issue--and the associated unit test-- and it looks good. I double checked the wiki API documentation and it seems to already convey the jQueryable contract for container. We're all set here for 1.1.2.\n"
    }
  ]
}
---
The Layout Reorderer API specification says about fluid.reorderLayout = function(container, userOptions) that "The container is a CSS-based selector, single-element jQuery object, or DOM element that identifies the DOM element containing the layout.", and all the documentation and sample code I can find supplies a selector string as the first argument to that function.

Yet if I call fluid.reorderLayout = function(container, userOptions) to create my reorderer, supplying the first argument as a selector string, when the reorder later tries to create the model to serialize and post to my afterMoveCallbackUrl, it will explode inside fluid.getId = function (element) because fluid.moduleLayout.layoutToIds = function(idLayout) used to create the model calls fluid.getId(idLayout.container) when the idLayout.container var has been initialized to the given selector string, and not an element as required by getId.

I modified my code to supply the element result from fluid.container = function (containerSpec) to the fluid.reorderLayout function, and now everything appears works as designed for me, with the model being serialized correctly and posted when any modules are reordered.

Looking into the problem deeper, the specification for fluid.reorderer = function (container, options) says '@param container - the root node of the Reorderer', implying that argument should be an element, yet fluid.reorderLayout = function (container, userOptions) says '@param {selector} a selector for the layout container' and yet forwards that 'container' selector param to the reorderLayout function untouched.

I looked into fluid.reorderImages = function (container, options) for comparison, and it starts off looking smarter to me, calling 'var that = fluid.initView = function (componentName, container, userOptions)' and then using the result to create 'var containerEl = fluid.unwrap(that.container)', which it then supplies to several functions.  But then it later appears to go off and supply the original 'container' spec to fluid.reorderer and several other functions which look like they also expect an element?

My newb reaction would be to patch fluid.reorderImages to supply 'containerEl' to all functions expecting an element, and fluid.reorderLayout should be patched to have similar operation, calling fluid.initView, etc. &#x20;

But I really have to wonder, am I totally confused and missing something here?

        