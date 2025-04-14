---json
{
  "title": "FLUID-2793",
  "summary": "Progress bar doesn't increment to default value in text field",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Armin Krauss",
  "date": "2009-05-27T15:37:41.000-0400",
  "updated": "2015-06-26T10:00:23.744-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Progress"
  ],
  "environment": "Mac OS X 10.4.11, Safari 3.2.1 (4525.27.1)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-11T14:39:22.937-0400",
      "body": "This demo has been removed\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:53.561-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
When I enter the text the progress is preset to 14 % but the bar does not show this. If I then enter the percent field and exit it or click enter nothing happens.\
Only if I edit the number in the progress percentage field, the bars respond.

        