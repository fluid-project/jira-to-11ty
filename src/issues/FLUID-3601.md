---json
{
  "title": "FLUID-3601",
  "summary": "Overflow layout container shares space with flexible containers if width of browser window is less than overflow width (Safari 4/OS X 10.5)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2010-04-05T16:24:35.000-0400",
  "updated": "2015-06-26T10:14:47.797-0400",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3601/Picture 6.png",
      "filename": "Picture 6.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:26.883-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:27.618-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
See attached screenshot (of <http://build.fluidproject.org/infusion/tests/framework-tests/fss/html/1.fss.layout.containers.html> running in Safari 4/OS X 10.5)

        