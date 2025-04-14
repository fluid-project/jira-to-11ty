---json
{
  "title": "FLUID-3600",
  "summary": "Pager demo markup has errors when testing with AChecker.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "y z",
  "date": "2010-04-05T16:15:16.000-0400",
  "updated": "2010-12-07T07:02:13.442-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Demos",
    "Pager"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3580/",
      "key": "FLUID-3580"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3822/",
      "key": "FLUID-3822"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-11-09T16:04:33.302-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-09T16:06:28.711-0500",
      "body": "\"Line 56, Column 25: input element, type of \"text\", missing an associated label.\\\nLine 62, Column 25: input element, type of \"text\", missing an associated label. \"\n\nHas been fixed as part of general markup clean-up of the demo.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-07T07:02:13.436-0500",
      "body": "Verified that the table has a summary, and the select has a label. This, accompanied by Jonathan's previous comment, means that all the issues have been addressed.\n"
    }
  ]
}
---
Line 35, Column 27:  select element missing an associated label. \
Line 43, Column 13:  Layout table has a summary.  \
Line 56, Column 25:  input element, type of "text", missing an associated label.  \
Line 62, Column 25:  input element, type of "text", missing an associated label. &#x20;

        