---json
{
  "title": "FLUID-5369",
  "summary": "Update the OverviewPanel demo to show more of its configurability",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2014-05-13T11:58:14.858-0400",
  "updated": "2021-07-29T01:34:08.082-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-22T15:26:59.903-0400",
      "body": "We should re-evaluate if the overview panel is the design we want to use for our demos going forward. One issue is that they tend to cover the demo on page load on small screens. Also the \"\\*\" always blocks part of the UI Options demo.\n"
    }
  ]
}
---
The Overview Panel demo currently does not show how it can be configured. Update the demo so that:

* The demo code link goes to the github page
* API and design links go somewhere meaningful.
* The text and content on the panel and the demo page itself should describe more about what the component can do.

        