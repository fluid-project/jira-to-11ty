---json
{
  "title": "FLUID-4478",
  "summary": "Large files not being rejected by Flash uploader in IE6 - 8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2011-09-30T10:26:04.876-0400",
  "updated": "2014-05-22T14:27:35.026-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Windows 7 IE8, IE9\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4488/",
      "key": "FLUID-4488"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4478/Screen Shot 2011-09-30 at 9.53.png",
      "filename": "Screen Shot 2011-09-30 at 9.53.png"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-09-30T10:26:45.913-0400",
      "body": "Screenshot of one large file already uploaded, and another large file in process of being uploaded.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:27:35.008-0400",
      "body": "Due to a cross site scripting vulnerability we have removed flash support from the uploader. See <https://fluidproject.atlassian.net/browse/FLUID-5354#icft=FLUID-5354>\n"
    }
  ]
}
---
Using a large file (i.e. 93MB) that exceeds the maximum file size (20MB), Uploader gladly accepts the file in the Flash uploader.&#x20;

        