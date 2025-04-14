---json
{
  "title": "FLUID-298",
  "summary": "Modify the tabindex plugin to return the default tabindex value for elements that are naturally focussable.",
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
  "date": "2008-02-22T14:36:43.000-0500",
  "updated": "2011-02-22T16:27:57.860-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-02-22T14:40:47.000-0500",
      "body": "Added a new function to the public API, hasTabindexAttr () that behaves the way hasTabindex () did previously. Modified hasTabindex () and getValue () to correctly return values if the element doesn't have a tabindex attribute but is naturally focussable by the browser (and this has an effective tabindex of 0).\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:57.859-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---

        