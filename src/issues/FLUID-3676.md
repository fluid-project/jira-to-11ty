---json
{
  "title": "FLUID-3676",
  "summary": "mFSS: Improve the color contrast of the summary text in navigation lists ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Alison Benjamin",
  "date": "2010-06-30T11:48:09.253-0400",
  "updated": "2015-06-26T10:03:51.274-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Mobile FSS"
  ],
  "environment": "iphone&#x20;\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:26.026-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:00.824-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
a11y issue

This applies to the navigation lists in the iphone mobile fss theme.&#x20;

The class "fl-link-summary" gives description text the color #999999. Against a white background, this means the description text fails WCAG AA.&#x20;

        