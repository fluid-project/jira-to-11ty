---json
{
  "title": "ENGAGE-97",
  "summary": "The collapse height should only need to be specified in one location, instead of in both the options and in css",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-09-24T15:10:10.000-0400",
  "updated": "2017-12-22T09:44:17.352-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "MoreLess"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:17.350-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
The collapse height needs to be specified in both the options and in css

Currently the value in the options is what is used to test the height for whether or not the toggle button should be displayed. The css value is what the height is actually set to.&#x20;

It may be better to specify how many lines are shown rather than a direct pixel height.&#x20;

        