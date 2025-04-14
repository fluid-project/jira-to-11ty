---json
{
  "title": "VP-6",
  "summary": "In IE8, Clicking on a transcript element sometimes does not jump the video to the clicked location",
  "tags": "VP",
  "project": {
    "key": "VP",
    "title": "Video Player"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2012-10-24T15:59:29.372-0400",
  "updated": "2017-12-22T10:28:44.716-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [
    "transcripts"
  ],
  "environment": "IE8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2012-12-11T12:47:21.785-0500",
      "body": "Tested fine in IE9 on Windows 7.\n\nOn IE8 this is still an issue. Some more details:\n\n* clicking a start of the sentence sometimes puts you at the beginning of the previous to selected sentence.\n* clicking on middle or end of multi-part sentence would put you at the start of the sentence or at the start of the previous sentence.\n* it doesn't appear that clicking the transcript will ever put you on the sentence AFTER.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T10:28:44.714-0500",
      "body": "The video player repository has been archived.\n"
    }
  ]
}
---
In IE8, Clicking on a transcript element sometimes does not jump the video to the clicked location. Sometimes it scrubs to a point **near** where you clicked.

        