---json
{
  "title": "FLUID-4506",
  "summary": "Tab panel div should be same size as the full panel area - noticable when focused",
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
  "date": "2011-10-05T14:25:02.106-0400",
  "updated": "2013-10-04T09:41:10.766-0400",
  "versions": [
    "1.4"
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
      "date": "2013-10-04T09:41:10.756-0400",
      "body": "UIO no longer uses tabs\n"
    }
  ]
}
---
The div containing the controls for each tab (tab panel) has tabindex set on it and is therefore focusable. This comes from ariaTabs and seems to be to help the screen reader set the correct mode?? (See <http://www.accessibleculture.org/articles/2010/08/aria-tabs/>). In order for the focus to be more seamless, the div should be the same size as the panel - right now it's not as tall.

        