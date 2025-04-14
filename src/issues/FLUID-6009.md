---json
{
  "title": "FLUID-6009",
  "summary": "Improve the presentation of disabled elements and placeholder text",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-10-28T09:01:34.201-0400",
  "updated": "2020-07-30T15:31:15.606-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6525/",
      "key": "FLUID-6525"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-07-30T15:31:15.606-0400",
      "body": "For <https://fluidproject.atlassian.net/browse/FLUID-6525#icft=FLUID-6525> we modified the placeholder text in the contrast themes to have the same colour as the content but italicized to identify it as placeholder text. In some browsers the placeholder text will still have some opacity applied (e.g. Firefox 79).\n"
    }
  ]
}
---
The typical presentation of disabled elements and placeholder text is to make them slightly greyed out, low contrast. However this makes them harder to perceive and may not be legible for some individuals. We should explore alternate presentations / representations for elements that are disabled or used as a placeholder.&#x20;

        