---json
{
  "title": "FLUID-3338",
  "summary": "Mobile FSS thumbnail enhancement selectors are too specific",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-10-28T14:14:58.000-0400",
  "updated": "2014-03-03T14:21:14.643-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Mobile FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2010-03-25T14:21:50.000-0400",
      "body": "Engage templates use thumbnails with variations in multiple places, so this may have been a bug from something else blocking the desired effect.\n"
    }
  ]
}
---
The selectors to effect thubmnails were too specific and strict, not allowing slight variations in the expected markup pattern

        