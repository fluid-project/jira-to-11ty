---json
{
  "title": "FLUID-1048",
  "summary": "Simple Reorderer API function should include orderChangedCallback in options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2008-07-28T13:54:26.000-0400",
  "updated": "2009-06-03T13:43:47.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1139/",
      "key": "FLUID-1139"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-928/",
      "key": "FLUID-928",
      "summary": "Reorderer should provide callbacks for a variety of interesting moments"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-07-31T16:35:01.000-0400",
      "body": "We need to work out a reasonable set of API conventions for every component. This will likely include a central point where callbacks can be registered. As a result, we probably won't fix this issue in the style described.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-19T12:47:43.000-0400",
      "body": "In the interest of consistency, both the itemSelector and the orderChangedCallback should be moved into the options. The itemSelector concept should be conveyed using the 'selectors' option.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-08-20T15:11:42.000-0400",
      "body": "reorderLayout now has default selectors for 'columns', 'modules', and 'lockedModules'.&#x20;\n\nAll three of reorderList, reorderGrid and reorderLayout now take 2 parameters - the container and options.&#x20;\n"
    }
  ]
}
---
Currently, the various simple Reorderer functions (reorderList(), reorderGrid() and reorderLayout()) accept the orderChangedCallback function as a parameter, in addition to the options object.

However, the general convention that has been emerging with our APIs is that required items are parameters to functions, and anything optional is encompassed by the options object.

If we wish for these simple Reorderer functions to be in harmony with this API convention, then the orderChangedCallback parameter should become part of the options object.

dev-iteration41

        