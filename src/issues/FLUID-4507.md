---json
{
  "title": "FLUID-4507",
  "summary": "Larger font-size makes \"with preview\" UIO controls line up inconsistently",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2011-10-05T15:58:32.006-0400",
  "updated": "2015-06-10T10:55:51.040-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "FF6, Mac 10.6\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4507/Screen shot 2011-10-05 at 3.58.19 PM.png",
      "filename": "Screen shot 2011-10-05 at 3.58.19 PM.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-10T10:55:51.033-0400",
      "body": "Likely fixed with the demo refactoring\n"
    }
  ]
}
---
For font sizes 1.5-1.7 times, some text controls get too wide and move below the label while others stay floating to the right of the label. It's confusing when they're not consistent.

        