---json
{
  "title": "FLUID-946",
  "summary": "The 'focus' style should be applied to the display text on keyboard focus as well as on mouse hover.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Anastasia Cheetham",
  "date": "2008-07-18T18:11:54.000-0400",
  "updated": "2008-07-18T18:53:32.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-18T18:53:32.000-0400",
      "body": "Duplicate of <https://fluidproject.atlassian.net/browse/FLUID-891#icft=FLUID-891>\n"
    }
  ]
}
---
Currently, the 'focus' class (the yellow highlight in our demos) is applied to the display text on mouse hover, but not when the user tabs focus to the text. The same discoverability style needs to be applied in both cases.

        