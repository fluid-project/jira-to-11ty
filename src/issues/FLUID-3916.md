---json
{
  "title": "FLUID-3916",
  "summary": "When changing items per page, original items not properly displayed.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jen Chow",
  "date": "2010-12-16T11:08:00.118-0500",
  "updated": "2016-10-26T09:31:56.655-0400",
  "versions": [
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "Mac OSX 10.6 Safari 5\\\nFirefox 29, Chrome 35, Safari 7 (Mac OS 10.9)\n\nIE 8, 9, 10, 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When changing items per page, the items displayed should contain the first item that was originally displayed per QA test, but doesn't. Instead, page number stays constant and dictates what content is displayed.

        