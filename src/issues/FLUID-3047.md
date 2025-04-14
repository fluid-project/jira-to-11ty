---json
{
  "title": "FLUID-3047",
  "summary": "Pointer cursor over text when it should be an i-bar: using Firefox",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-07-17T08:55:07.000-0400",
  "updated": "2014-06-05T15:30:43.412-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, FF3, FF3.5, FF4\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3047/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-18T13:45:05.722-0400",
      "body": "screenshot.png shows the cursor as a pointer instead of an i-bar when over text\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-05T15:30:43.405-0400",
      "body": "This demo has been removed\n"
    }
  ]
}
---
Steps to reproduce

1\) Open the uPortal mock up example\
<http://build.fluidproject.org/infusion/integration-demos/uportal/html/portal.html>

2\) Hover your mouse over the text of any portlet.

Notice that the cursor remains as a pointer, instead of changing into an i-bar.

This was reported by the uPortal community\
<http://www.ja-sig.org/issues/browse/UP-2442>

        