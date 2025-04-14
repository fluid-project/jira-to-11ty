---json
{
  "title": "FLUID-6032",
  "summary": "Progress percentage displayed on the page doesn't update",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2016-11-04T13:20:01.793-0400",
  "updated": "2016-11-04T15:26:11.820-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Demos",
    "Progress"
  ],
  "environment": "Chrome 54, FireFox 49.0.2, Safari 10 (macOS 10.12)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6032/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-04T13:21:11.201-0400",
      "body": "screenshot.png shows the progress bar visually indicating progress but that the \"%\" display sticks at \"0%\"\n"
    },
    {
      "author": "Kobi Orgil",
      "date": "2016-11-04T15:19:39.748-0400",
      "body": "Just commenting to confirm that the same problem exists on Windows 10 on all the listed web browsers\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-11-04T15:26:07.648-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/779> has been merged into the master branch at 0afec08bca1ecd5455645f950077d46e3b7efa91\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the [Progress Demo](http://build.fluidproject.org/infusion/demos/progress/)\
2\. Click submit to trigger the progress bar

Notice that the progress bar fills up and that aria values are increase, but the "%" indicator below the Progress bar remains at 0%.

        