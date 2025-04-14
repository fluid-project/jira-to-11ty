---json
{
  "title": "FLUID-2861",
  "summary": "Black line across browser window Uploader in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Laurel Williams",
  "date": "2009-06-01T11:56:06.000-0400",
  "updated": "2011-01-05T12:16:43.265-0500",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE 8 (Win XP, Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2861/blackline.JPG",
      "filename": "blackline.JPG"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-06-01T11:57:47.000-0400",
      "body": "here is a screenshot of this issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-06T15:08:25.000-0500",
      "body": "I believe this is the focus styling on the Uploader's container\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-05T12:16:43.046-0500",
      "body": "Can't reproduce in Infusion 1.3 in any browser/platform combination.\n"
    }
  ]
}
---
To reproduce this problem:

1\) Go to <http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>

2\) see black line across browser window - right through the upload button.

        