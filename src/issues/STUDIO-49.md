---json
{
  "title": "STUDIO-49",
  "summary": "Remove the persistent croll bars in IE9",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Johnny Taylor",
  "reporter": "Cindy Li",
  "date": "2012-04-26T11:18:54.169-0400",
  "updated": "2014-03-04T11:53:58.668-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": "IE9\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Johnny Taylor",
      "date": "2012-04-26T11:51:48.058-0400",
      "body": "This issue is something I've had previous experience with. It's caused by the overflow:auto rule on line 186 of the ul.fl-grid selector in the fss-layout.css style sheet. It turns out a fix isn't hard to get around it. Put an overflow:visible on the ul.fl-grid in your style sheet. It solves the issue, as the scroll bars go away, but I'm unsure if it introduces another issue. The way I understand the property it shouldn't, but you never know. Getting back to my previous experience why is overflow:auto even there in the first place?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-04T11:53:58.668-0500",
      "body": "The fluid studios site has been taken down. There are no current plans to replace it.\n"
    }
  ]
}
---
With IE 9, there are persistent scroll bars that appear, even though there doesn't seem to be a need to scroll. There are two on the main page, and one on the inner pages. These scroll bars should be removed.

        