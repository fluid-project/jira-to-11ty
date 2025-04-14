---json
{
  "title": "FLUID-3981",
  "summary": "Jumping to a position on the scrollbar doesn't work in the keyboard accessiblity plugin demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "James Yoon",
  "date": "2010-12-20T17:01:49.417-0500",
  "updated": "2015-06-26T10:08:20.366-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "FF3.6, IE8 in Windows 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T09:28:11.723-0400",
      "body": "Could not reproduce with the latest version of Firefox (v 38.0.5)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:11.527-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
In FF3.6/Win7, clicking on a position on the scrollbar for the keyboard accessibility plugin demo does not move the position at all.

In IE8/Win7, the same action temporarily moves to the requested position, but is reverted back to the original position immediately afterward. If one clicks frequently enough, it will successfully move to the requested position.

        