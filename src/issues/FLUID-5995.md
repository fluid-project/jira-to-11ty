---json
{
  "title": "FLUID-5995",
  "summary": "Page link text is unclear without context",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-10-26T15:58:31.745-0400",
  "updated": "2016-10-26T15:58:31.745-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "Safari 10 ( macOS 10.12 )\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The page links used by the pager are simply numbers. (e.g. 1, 2, 3 ). However, this can be unclear for an AT, especially in cases where the links are presented together out of their original context.

It would be better to add something that describes them a bit more, e.g. (aria-label="page 1")

        