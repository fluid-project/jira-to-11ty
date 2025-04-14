---json
{
  "title": "FLUID-32",
  "summary": "Implement a \"shifting\" algorithm for re-ordering elements.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-07-17T12:17:52.000-0400",
  "updated": "2011-02-22T16:27:47.329-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-206/",
      "key": "FLUID-206"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-08-14T21:18:30.000-0400",
      "body": "As well as failing to support the use case of non-reorderable items (\"stones in the DOM\") our current \"direct\" use of jQuery to honour the effect of reordering is causing a number of serious issues as a result of repeated evaluation of nested \\<script> blocks. A dedicated and efficient \"DOM Permutatoin Engine\" is required which manipulates the target elements directly and bypassing the jQuery DOM engine for this task.&#x20;\n\nNotice that the expected behaviour of the permutation engine in the presence of \"stones\" is documented at <http://wiki.fluidproject.org/display/fluid/Reorderer+Shift+Algorithm>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:01:45.000-0400",
      "body": "Drop Manager, Dom Permutation work merged back into trunk at revision 5476\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:47.327-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Currently the Lightbox doesn't have a concept of non-reorderable items. When we add this functionality, we will have to refine our DOM manipulation algorithms to correctly move re-orderable items while leaving non-reorderables in the same position within the DOM.

        