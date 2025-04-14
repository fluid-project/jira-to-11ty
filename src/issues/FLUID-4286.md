---json
{
  "title": "FLUID-4286",
  "summary": "FSS High Contrast theme erroneously sets font size too large for widgets",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2011-06-08T20:47:39.447-0400",
  "updated": "2014-04-02T16:40:51.800-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-06-08T20:56:08.199-0400",
      "body": "Line 59 of src/webapp/lib/jquery/ui/css/fl-theme-hc/hc.css\n\n.fl-theme-hc .ui-widget { font-family: Verdana,Arial,sans-serif; font-size: 1.2em; }\n\n1.2em should be 1.0em.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T16:40:51.799-0400",
      "body": "FSS is deprecated\n"
    }
  ]
}
---
The Widget style for the high contrast theme sets the font size to 1.2em, when it should be 1.0em.

        