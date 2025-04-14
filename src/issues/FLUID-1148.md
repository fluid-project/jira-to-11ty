---json
{
  "title": "FLUID-1148",
  "summary": "Implement new \"Drop Manager\" for the Reorderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2008-08-14T21:04:01.000-0400",
  "updated": "2011-02-22T16:27:49.007-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Image Reorderer",
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-33/",
      "key": "FLUID-33"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1062/",
      "key": "FLUID-1062"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1135/",
      "key": "FLUID-1135"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T17:59:05.000-0400",
      "body": "Drop Manager, Dom Permutation work merged back into trunk at revision 5476\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:49.005-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
A great many bugs and inconsistencies, as well as performance issues, are caused by our use of the standard JQuery UI "ui.droppable" drop manager. These can only be decisively resolved by implementing a complete replacement for its drop model, which is more suited to the use case of reordering.

In outline, the issues arise because of the "razor edged" drop target detection in ui.droppable - a drop target is only recognised if the mouse pointer is definitely within the bounds of the DOM element nominated as a "drop target". However, for the case of reordering, a more "soft-edged" approach is appropriate - there are many cases (e.g. FLUID-1125, FLUID-1127, FLUID-148) where the appropriate UI response is to map the drop target to the "geometrically nearest" position to the mouse cursor, rather than to either assume there is no target, or revert to the last target, which are the only two options available with the "razor edge" distance model.

Also, several performance problems are traceable to ui.droppable - the "prepareOffsets" method is extremely expensive and is currently tied to the dragStart point of the lifecycle. It would be preferable to be able to compute the relevant DOM dimensions in user idle time after the drag proper has started. Finally, our use of the ui.droppable manager is awkward since the "left/right" logic required to spot previous/after drop targets has to be done by a raw mouse listener on a parallel lifecycle to the main drop notification. It would be preferable and more efficient to have this factored back behind a single, tractable interface, as well as to eliminate as much as we can of in-memory garbage created during a drag cycle.

dev-iteration42

        