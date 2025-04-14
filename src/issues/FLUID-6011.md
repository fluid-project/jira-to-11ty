---json
{
  "title": "FLUID-6011",
  "summary": "ToC creates empty links to use as page anchors",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2016-10-28T09:09:57.762-0400",
  "updated": "2019-07-12T09:16:36.619-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Table of Contents"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently the ToC component searches for all the headings on the page and inserts an empty link before it to be used as an in page anchor. Additionally it makes use of the name attribute on these links to create the anchor. Instead we should make use of an ID on the heading for this purpose instead.&#x20;

The current implementation is both an HTML validation warning ( use of name ) and an accessibility issue ( empty anchors ).&#x20;

        