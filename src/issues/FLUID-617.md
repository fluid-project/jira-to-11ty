---json
{
  "title": "FLUID-617",
  "summary": "Simplify the API for creating a Reorderer for lists, grids, and portlets/layouts.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-05-22T18:40:55.000-0400",
  "updated": "2008-06-05T11:37:27.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-673/",
      "key": "FLUID-673"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-617/FLUID-617-a.patch",
      "filename": "FLUID-617-a.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-617/FLUID-617-b.patch",
      "filename": "FLUID-617-b.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-05-22T18:43:30.000-0400",
      "body": "Patch showing the implementation of reorderList() and reorderGrid().\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-05-28T18:59:00.000-0400",
      "body": "We've written these functions now and they're working nicely. Still to do:\n\n* Write a unit test for reorderLayout() itself; we test all the underlying functionality, and have a markup example, but need a unit test for the top-level function\n* Update reorderList() and reorderGrid() to optionally take a map of selectors allowing users to independently specify movables, selectables, drop targets, grab handle\n* Also pass through the options to those functions\n* Refactor reorderLayout() and initLayoutCustomizer() to take an orderChangedCallback function\n* Simplify initLayoutCustomizer()\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-05-29T18:31:26.000-0400",
      "body": "Attaching a patch with an implementation to allow a map of selectors or a single selector as a parameter to reorderList and reorderGrid. The rest of the above tasks have been done and committed.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-05-30T18:41:30.000-0400",
      "body": "Fixed!\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-05T11:37:27.000-0400",
      "body": "The new API is now being used in some of the examples.\n"
    }
  ]
}
---
Right now, it takes a bit of work to construct a Reorderer instance. You need to pass in a number of arguments that are essentially internal concerns to the Reorderer, such as itemFinders, the LayoutHandler, and so on. This probably presents a barrier to entry for most casual users who might just want to quickly reorder a list, grid or set of portlets, without getting into the complexities of our more advanced options and data structures.

Here's a suggested approach:

fluid.reorderList(containerSelector, itemSelector, orderChangedCallback);\
fluid.reorderGrid(containerSelector, itemSelector, orderChangedCallback);\
fluid.reorderPortlets(containerSelector, portletSelectors, options);

dev-iteration34

        