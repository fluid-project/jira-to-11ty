---json
{
  "title": "FLUID-2419",
  "summary": "the default selector for headerSortStylisticOffset is the \"th\" element",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-03-30T17:44:18.000-0400",
  "updated": "2009-04-08T09:06:45.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-04-02T10:01:51.000-0400",
      "body": "This was resolved with the class-renaming efforts.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-08T09:06:45.000-0400",
      "body": "Verified that it is now a class called \"flc-pager-sort-header\"\n"
    }
  ]
}
---
the default selector for headerSortStylisticOffset is the "th" element

It should be changed to use a class as the default (e.g. flc-pager-header)

        