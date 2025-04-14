---json
{
  "title": "FLUID-137",
  "summary": "Fluid 0.1 ships with a full version of Dojo, rather than a custom build containing only the Dojo core.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2007-12-01T02:31:29.000-0500",
  "updated": "2008-08-09T14:29:50.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-01-07T16:59:06.000-0500",
      "body": "Duplicates <https://fluidproject.atlassian.net/browse/FLUID-104#icft=FLUID-104>\n"
    }
  ]
}
---
At the moment, we ship the full release version of Dojo 0.9 along with our components. The Reorderer's limited use of Dojo will soon be replaced with complete support for jQuery, so we'll want to remove Dojo altogether or create a minimal build of it instead.

        