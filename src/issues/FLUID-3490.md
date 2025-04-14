---json
{
  "title": "FLUID-3490",
  "summary": "Undo component doesn't have a strings option, making i18n difficult",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-02-05T22:32:55.000-0500",
  "updated": "2010-03-31T15:30:45.000-0400",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Undo"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-3421/",
      "key": "FLUID-3421"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-03-30T18:42:37.000-0400",
      "body": "Justin is working on a patch to address this issue, along with improved screen reader support. This is one of our blockers for Infusion 1.2.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-31T15:28:47.000-0400",
      "body": "Justin and Alison's fix for <https://fluidproject.atlassian.net/browse/FLUID-3421#icft=FLUID-3421> also addresses this issue.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-31T15:30:45.000-0400",
      "body": "This issue overlaps with <https://fluidproject.atlassian.net/browse/FLUID-3421#icft=FLUID-3421>, which was fixed for Infusion 1.2. Closing it for simplicity's sake.\n"
    }
  ]
}
---
Undo component doesn't have a strings option, making i18n difficult

Currently you have to pass it a different renderer function that will provide markup with the appropriately internationalized text.

        