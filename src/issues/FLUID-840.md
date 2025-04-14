---json
{
  "title": "FLUID-840",
  "summary": "Add the ability for Inline Edit to render its own edit mode if the markup isn't already provided for it.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-06-28T13:27:22.000-0400",
  "updated": "2011-02-22T16:27:59.353-0500",
  "versions": [
    "0.4beta1"
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
      "date": "2008-07-16T15:36:30.000-0400",
      "body": "Fixed by implementing an injectable function that creates the edit mode.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:59.351-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
At the moment, InlineEdit requires the user to provide all of the required markup: both a view mode and the form fields for edit mode. It would be very convenient to have an optional mode where the component automatically injects the edit form fields if they aren't already found in the document.

This will ultimately be best achieved with small-scale template rendering on the client, but in the meantime a configurable function that does the DOM manipulation is reasonable.&#x20;

        