---json
{
  "title": "FLUID-4289",
  "summary": "Tabs error when passing jq ui tabs option \"disabled: true\" through ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Justin Obara",
  "reporter": "heidi valles",
  "date": "2011-06-10T11:47:19.813-0400",
  "updated": "2013-10-04T10:03:17.556-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-06-14T09:43:59.609-0400",
      "body": "I think this is either a bug with jQuery UI itself or with their documentation. They provide another means of setting disabled which takes an array of tab indexes instead of a Boolean, this works.\n"
    }
  ]
}
---
I tested the fat panel with tabs/sending options through with options: { tabOptions: {disabled: true }

getting error "o.disabled.concat is not a function" - appears to be working, but jq error?

        