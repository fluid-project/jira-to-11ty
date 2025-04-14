---json
{
  "title": "FLUID-3086",
  "summary": "Non sortable column's headers shouldnt be clickable",
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
  "date": "2009-08-11T10:12:43.000-0400",
  "updated": "2014-07-11T15:01:40.066-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-09T09:12:13.000-0500",
      "body": "The e-mail column gets focus styling when clicked.\n"
    }
  ]
}
---
If a column should not be sortable, then the header for that column should'nt be clickable.

        