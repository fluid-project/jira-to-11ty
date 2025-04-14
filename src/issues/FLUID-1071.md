---json
{
  "title": "FLUID-1071",
  "summary": "Resources tool ignores Preferable font type",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Nicolaas Matthijs",
  "date": "2008-07-31T07:12:06.000-0400",
  "updated": "2011-01-30T12:12:30.756-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-06-05T14:47:08.000-0400",
      "body": "UI Options is the replacement for Preferable\n"
    }
  ]
}
---
When you set your personal preferences in the PreferAble tool, the resources tool picks up everything except for the font type in links. So if I select Serif as my font, the links inside the resources tool still look like the normal font.

        