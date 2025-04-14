---json
{
  "title": "FLUID-4058",
  "summary": "Options merging doesn't work correctly for arrays.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2011-02-10T16:34:02.845-0500",
  "updated": "2011-02-11T10:04:47.136-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2011-02-11T10:04:47.069-0500",
      "body": "This JIRA is invalide since there's no mechanism of guaranteeing uniqueness in the array.\n"
    }
  ]
}
---
When two arrays are merged as part of the options merging, the options array overlays the defaults array and thus some of the defaults might get lost even though they are not supposed to be overwritten.&#x20;

        