---json
{
  "title": "FLUID-848",
  "summary": "The InlineEdit component should pass the edit field and text element to the finishedEditing callback as ordinary DOM nodes, not as jQuery instances. This is consistent with jQuery's own behaviour.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-07-01T18:16:23.000-0400",
  "updated": "2011-02-22T16:27:59.492-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-07-31T17:26:47.000-0400",
      "body": "This was fixed in time for 0.4 by simply unwrapping the jQueries.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:59.491-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Currently, InlineEdit passes jQuery instances to the finishedEditing callback. To be consistent with jQuery's own behaviour (and general user expectation), it should pass back ordinary DOM nodes.

        