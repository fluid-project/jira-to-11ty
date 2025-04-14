---json
{
  "title": "FLUID-705",
  "summary": "Simple Reorderer API functions don't properly constrain searches to discover a single container",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-06-04T10:34:56.000-0400",
  "updated": "2011-02-22T16:28:00.650-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1285/",
      "key": "FLUID-1285",
      "summary": "Layout Customizer API Consistency"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-08-08T21:01:50.000-0400",
      "body": "Could we reconfirm this is what we want to do? In recent discussions we have seemed to tend towards a universal standard of 1st-args-as-selectors rather than ids. Also recently I came across a test failure for constructing a layout, based on the assumption that it would have to have an id which was not in the test markup. Certainly for inlineEdit, for example, I recall thinking that we would actually like to unify instantiation so that we have an option to return an array-of-that in the case of multiple selection, as well as single-that for single selection... due to the miracle of that-ism this is at least an option we have 😛\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-10T22:18:28.000-0400",
      "body": "Closing this, since I believe our current container semantics are the ones desired (imposed by standard initView -> fluid.container environment)\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:28:00.648-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Currently, the reorderList(), reorderGrid(), and reorderLayout() functions are too loose with their container selectors. Here's what we do:

var container = jQuery(containerSelector);\
var itemFinder = buildFindItems(itemSelector, container);

The problem is that the containerSelector may not guarantee a single unique match. We're probably better off enforcing an API where clients give us a single unique ID as a string, thus guaranteeing that we can constrain on a single container, rather than a potential set of containers.

The API should change to:

reorderList(containerId, itemSelector, ...);\
and so on.

dev-iteration42

        