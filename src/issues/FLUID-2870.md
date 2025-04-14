---json
{
  "title": "FLUID-2870",
  "summary": "framework: Review and update README.txt file",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Eli Cochran",
  "date": "2009-06-01T12:47:20.000-0400",
  "updated": "2011-02-28T16:45:17.087-0500",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-06-02T08:53:57.000-0400",
      "body": "I went through the commit logs and this is what I've found that has changed:\n\niterateDOM API  - we need to check if this was advertised publicly in previous releases\\\ngetLastFocusedElement was added\n\nkeyboard a11y API change\n\nRenderer (possibly already noted in the renderer section but worth looking at)\n\n* removeClass decorator\n* attribute removal\n* textarea autobinding\n* fluid decorator&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:17.086-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
Review the Infusion Read Me file for changes pertaining to the Fluid framework, specifically What's New and Known Issues

1.1-release-process&#x20;

        