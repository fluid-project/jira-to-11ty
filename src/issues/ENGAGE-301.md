---json
{
  "title": "ENGAGE-301",
  "summary": "Cabinet fires open event on init even when the options to prevent this is on.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2010-01-27T11:21:04.000-0500",
  "updated": "2017-12-22T09:44:18.866-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Cabinet"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:18.865-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
Cabinet fires open event on init even when the options to prevent this is on.

A recent change to the cabinet that allows for a set of drawers to be opened by default, causes the open event to always fire on init of the cabinet.

This is because the function to open the drawers is called, without a parameter to block the firing of events. This is true even when there are no default open drawers specified.

        