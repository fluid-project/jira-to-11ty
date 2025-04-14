---json
{
  "title": "FLUID-993",
  "summary": "Migrate Keyboard Accessibility plugin over to \"that-ist\" architecture",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2008-07-23T14:54:02.000-0400",
  "updated": "2011-02-22T16:27:47.120-0500",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-07-23T15:24:22.000-0400",
      "body": "Fixed at revision 5256\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:47.118-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
To fit in with our usage in InlineEdit, and also the general usage of JQuery UI components such as dialog, draggable, etc. the "selectable" portion of the Keyboard Accessibility Plugin should be migrated over to a "that"-ist architecture, to consist of a single central "that" representing the selectionContext, which is targetted at the owning container, rather than the child selectables. The selectionContext "that" will be stored in the DOM under the "container" node rather than that of the individual selectable items. This will improve semantic consistency and aid tasks such as FLUID-978.

The JQuery-facing semantics of the plugin will be changed to cause construction via the "container" element via the individual selectables, the specification for which will be merged into the overall "options" structure. Further, the "handlers" structure will be merged into the base of "options".

        