---json
{
  "title": "FLUID-3915",
  "summary": "When changing items per page, original items not properly displayed.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Colin Clark",
  "reporter": "Jen Chow",
  "date": "2010-12-16T11:07:30.257-0500",
  "updated": "2011-01-25T14:38:04.688-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Pager"
  ],
  "environment": "Mac OSX 10.6 Safari\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When changing items per page, the items displayed should contain the first item that was originally displayed per QA test, but doesn't. Instead, page number stays constant and dictates what content is displayed.

        