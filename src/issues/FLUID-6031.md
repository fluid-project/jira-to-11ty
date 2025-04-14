---json
{
  "title": "FLUID-6031",
  "summary": "The \"Items per page\" dropdown should specify an aria-controls relationship",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-04T13:10:16.686-0400",
  "updated": "2016-11-04T13:10:16.686-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The "Items per page" dropdown on the [pager demo](http://build.fluidproject.org/infusion/demos/pager/) should specify an [aria-controls](https://www.w3.org/TR/wai-aria/states_and_properties#aria-controls) relationship. This will inform an AT that this element will affect those other items in the document.

        