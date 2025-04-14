---json
{
  "title": "FLUID-4329",
  "summary": "Remove duplicate jquery ui tabs styling from FatPanel.css",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "heidi valles",
  "date": "2011-07-07T15:04:59.544-0400",
  "updated": "2015-06-26T10:02:06.175-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "FSS",
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4910/",
      "key": "FLUID-4910",
      "summary": "Create a consistent style guide across all Infusion components for default styles"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:26.825-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:55.782-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Right now we have jquery ui tabs styling in lib/jquery/ui/css/default-theme/jquery.ui.theme.css , we also have it in UIO's FatPanel.css. Instead of duplicating this css it should be removed from FatPanel.css and FatPanel should include the default theme file (once it's an actual infusion theme)

        