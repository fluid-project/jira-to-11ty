---json
{
  "title": "ENGAGE-2",
  "summary": "Kettle applies incorrect conversion to file:// URL format on UNIX platforms",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Antranig Basman",
  "date": "2009-08-21T12:09:41.000-0400",
  "updated": "2009-11-10T14:57:58.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-08-21T12:26:06.000-0400",
      "body": "Fix committed at 7807, please test..\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-10T14:57:58.000-0500",
      "body": "Closed per previous comment\n"
    }
  ]
}
---
Whilst file: URLs of the form file:/E:/path are valid on Windows, UNIX platforms require prefixing of absolute filenames with two // forming file:///global/path. However, file://E:/path URLs are not valid on Windows.

        