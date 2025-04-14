---json
{
  "title": "FLUID-4760",
  "summary": "Progress value does not reset on command-r or browser refresh button",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Cindy Li",
  "date": "2012-08-15T15:11:33.154-0400",
  "updated": "2014-07-30T15:27:06.613-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Progress"
  ],
  "environment": "Firefox 14.0.1 (Mac OS 10.7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4760/Screen Shot 2012-08-15 at 3.11.14 PM.jpeg",
      "filename": "Screen Shot 2012-08-15 at 3.11.14 PM.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-08-20T08:38:23.068-0400",
      "body": "May have to do with FF cacheing the values in the text input.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-30T15:27:06.594-0400",
      "body": "This demo is no longer present, and the bug does not present itself in the existing examples.\n"
    }
  ]
}
---
Step 1: open up <http://build.fluidproject.org/infusion/tests/manual-tests/html/simple-progress.html>\
Step 2: change the progress value\
Step 3: try to refresh page using command-r or browser refresh button, progress value does not reset to default.

However, value does reset when you click enter on the page url.

        