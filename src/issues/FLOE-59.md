---json
{
  "title": "FLOE-59",
  "summary": "Issues with view an OER item page on IE8 & 9",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Cindy Li",
  "date": "2012-07-30T15:41:58.527-0400",
  "updated": "2012-07-31T16:44:17.151-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "IE8 on WinXP, IE9 on Win7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2012-07-31T16:44:17.149-0400",
      "body": "The issue only occurs with uncompressed css causing half loaded css files. Don't need any fix once compressed css is used.\n"
    }
  ]
}
---
How to get to view an OER item page:\
On "browse all" page, click on one subject area that has OER items, click on the small view icon besides the title of an OER item, login as the author of this content.

1\. The "edit" and "delete" link at the top of the content are too close that look like one link\
2\. In IE8, increasing the text size somehow creates a vertical line in the middle of the content which doesn't stretch according to the text size change.

        