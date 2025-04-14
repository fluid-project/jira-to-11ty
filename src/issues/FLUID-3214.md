---json
{
  "title": "FLUID-3214",
  "summary": "Provide a single class to add elipses to long text",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-09-30T10:03:33.000-0400",
  "updated": "2015-06-26T10:17:50.217-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "FSS",
    "Mobile FSS",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2010-03-26T11:59:44.000-0400",
      "body": "Yura mentioned a good idea: fl-list-brief should be transformed into something more general purpose, where is can shorten/crop text on many elements at once (not just the summary).\n\nAs for using this in FSS, text-overflow is poorly supported cross-browser.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-03-07T09:58:20.886-0500",
      "body": "This will likely be implemented for Uploader, and FSS might have additions to support it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:26.769-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:32.256-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Provide a single class to add elipses to long text

Currently this is only provided when already using fl-link-summary.

        