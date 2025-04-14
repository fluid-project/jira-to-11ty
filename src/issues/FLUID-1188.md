---json
{
  "title": "FLUID-1188",
  "summary": "Reorderer - orderable-hover is applied when it should not be",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jacob Farber",
  "date": "2008-08-18T11:25:53.000-0400",
  "updated": "2009-06-05T09:25:52.000-0400",
  "versions": [
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-06-05T09:25:51.000-0400",
      "body": "This issue has gone stale: it doesnt seem to be there anymore\n"
    }
  ]
}
---
Create a simple sortable list. \
If you click and drag on a list item's \***element**\*, then as you move around the orderable-hover class is applied on hover (not desired). \
If you click and drag on a list item's \***content**\*, then as you move around the orderable-hover class is not applied (desired).

        