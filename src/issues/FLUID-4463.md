---json
{
  "title": "FLUID-4463",
  "summary": "Tooltip not showing for Dropdown Inline Edit in Chrome/Win XP",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Anastasia Cheetham",
  "date": "2011-09-22T15:32:05.262-0400",
  "updated": "2015-06-26T10:03:25.909-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Chrome on Win XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-10T10:17:13.446-0400",
      "body": "Could not reproduce with Chrome 43\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:59.889-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Using the Dropdown Inline Edit, the instructional tooltip that is supposed to appear when the mouse hovers over the field does not appear. Interestingly, the tooltip **does** appear using Simple Text Inline Edit and Rich Text Inline Edit.

On IE 6, 7 and 8 and on FF6, the tooltip works.

        