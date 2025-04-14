---json
{
  "title": "FLUID-2764",
  "summary": "On upgrade to jQuery UI 1.8, revisit FLUID-2650",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2009-05-25T11:06:55.000-0400",
  "updated": "2009-06-08T09:50:33.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2650/",
      "key": "FLUID-2650",
      "summary": "After changing to the largest font size or line spacing, the dialog will load at the bottom of the page."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-06-08T09:50:33.000-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-2650#icft=FLUID-2650> was not a jQuery UI bug per se - it was the undesired result of incorrect \"button\" markup\n"
    }
  ]
}
---
<https://fluidproject.atlassian.net/browse/FLUID-2650#icft=FLUID-2650> was escalated. The related jQuery ticket, <http://dev.jqueryui.com/ticket/4539>, has been tagged as fix for 1.8. If/when we upgrade to jQuery UI 1.8, we should check this ticket, and if it's been fixed, verify whether or not their fix takes care of <https://fluidproject.atlassian.net/browse/FLUID-2650#icft=FLUID-2650>. If not, we should consider applying Laurel's patch for that issue.

        