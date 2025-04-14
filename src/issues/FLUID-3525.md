---json
{
  "title": "FLUID-3525",
  "summary": ".fl-offScreen-hidden is actually accessible to screen readers.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "y z",
  "date": "2010-03-12T14:10:57.000-0500",
  "updated": "2013-04-11T17:34:16.112-0400",
  "versions": [
    "1.2",
    "1.3.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-03-16T09:33:44.000-0400",
      "body": "I believe this was intentional and is used in cases for example where we want to hide labels offscreen so they are accessible by the screen reader but not visibly part of the ui. I'm assigning this to Jacob to confirm.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2010-03-23T11:40:58.000-0400",
      "body": "Yes, this is by design. See comment above the class name:  \"/\\* hide text for screen readers. \\*/\"\n"
    },
    {
      "author": "y z",
      "date": "2010-03-23T11:52:44.000-0400",
      "body": "The comment \"/\\* hide text for screen readers. \\*/\" for the style is a little misleading. This was the reason it was originally misused in the first place in attempt to hide elements from the screen reader. As Justin mentions it in his comment this style hides stuff off screen so it is accessible by the screen reader but not in the visible part of the ui.\n"
    }
  ]
}
---
FSS: .fl-offScreen-hidden is actually accessible to screen readers, should rather be display:none

        