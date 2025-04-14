---json
{
  "title": "FLUID-1531",
  "summary": "Uploader 2: File queue doesn't scroll.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Colin Clark",
  "date": "2008-09-09T20:33:40.000-0400",
  "updated": "2008-09-16T16:55:47.000-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-09-16T13:21:43.000-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-1531#icft=FLUID-1531>: FileQueue needs to call render() on the scroller each time a file is added or removed from the queue so that the scroller knows that the size of the queue has changed.&#x20;\n\nThis is to cover for an IE6 bug where IE6 doesn't render overflow elements correctly when they don't have enough contents to overflow.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-16T16:55:47.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n"
    }
  ]
}
---
The FileQueue ensures that its container is scrollable using the Scroller mini-component. Instantiation is successful (ie. it thinks its scrollable), but the queue isn't actually scrollable in the uploader-inline.html file.

Could this be a styling issue?

dev-iteration43

        