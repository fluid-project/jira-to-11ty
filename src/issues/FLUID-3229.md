---json
{
  "title": "FLUID-3229",
  "summary": "UI Options does not depend on the keyboard a11y plugin but links to it in the template",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2009-10-05T18:02:15.000-0400",
  "updated": "2013-10-04T10:22:58.873-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-03-29T21:10:12.000-0400",
      "body": "I tried removing the link to the keyboard a11y plugin and everything seems to work fine. Justin, are you planning to run QA on UI Options? If so I'll commit the fix otherwise we may want to punt this issue.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-30T08:39:31.000-0400",
      "body": "We will be doing a full QA, due to the upgrade of jQuery.\n"
    }
  ]
}
---
I'm pretty sure that UI Options does not use the keyboard plugin. The link to it and the delegate plugin should be removed from the template and then well tested.&#x20;

        