---json
{
  "title": "FLUID-162",
  "summary": "Move private code out of fluid.access and into the jQuery plugin itself.",
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
  "date": "2008-01-17T12:32:35.000-0500",
  "updated": "2011-02-22T16:27:58.757-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-01-17T22:30:23.000-0500",
      "body": "Folded code into the jQuery plugin's private closure, moved the major constants into the jQuery.a11y namespace, and ported all the examples over. Done.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:58.756-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
At the moment, the jQuery keyboard accessibility library has two separate JavaScript files: KeyboardHandlers.js and jquery.keyboard-a11y.js. KeyboardHandlers, using the fluid.access namespace, contains low-level functions used by the jQuery plugin. These are now unnecessary and can be folded right into the plugin itself.

        