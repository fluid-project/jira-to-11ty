---json
{
  "title": "FLUID-4573",
  "summary": "Renderer should handle a toggle button",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2012-01-06T11:45:54.048-0500",
  "updated": "2017-09-26T12:39:48.727-0400",
  "versions": [
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/VP-1/",
      "key": "VP-1"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-06-10T20:23:18.018-0400",
      "body": "In the \"new renderer\" this will be handled by a Fluid component of the new type which is associated with a boolean model field. The \"old renderer\" itself will not be improved further and all the functionality it currently offers (e.g. binding to native HTML functions in DOM elements) will be unbundled for general use.\n"
    }
  ]
}
---
The Renderer currently doesn't seem to handle a toggle button i.e. a \<button> element that has a pressed state (i.e. "aria-pressed"). This is semantically different from a checkbox. For example, the "Play/Pause" control for the VideoPlayer is more properly implemented as a toggle button instead of a checkbox, but I'm unable to bind a \<button> to the state in the model.

        