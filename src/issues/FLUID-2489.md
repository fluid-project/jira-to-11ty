---json
{
  "title": "FLUID-2489",
  "summary": "Changing number of items per page not behaving as described",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2009-04-02T16:14:53.000-0400",
  "updated": "2010-04-15T13:58:51.000-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2489/Picture 4.png",
      "filename": "Picture 4.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2489/Picture 5.png",
      "filename": "Picture 5.png"
    }
  ],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2009-05-27T20:28:36.000-0400",
      "body": "FF3 Mac OSX 10.5 on the Sakai demo (<http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html#>)\n\nI started with displaying 20 per page and the first user on the page was student22.  When I changed to display 30 per page the first student on the page is student32 so the students I was seeing were gone.  I'll attach screen shots of each in case that helps somehow.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2009-05-27T20:29:55.000-0400",
      "body": "Displaying 20\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2009-05-27T20:30:29.000-0400",
      "body": "Displaying 30 changes the students in view\n"
    },
    {
      "author": "y z",
      "date": "2010-04-15T13:58:51.000-0400",
      "body": "This is expected behavior, given that the first page would contain first 30 records and thus the second one will have second 30 (30-60) instead of next 20 (20-40)\n"
    }
  ]
}
---
Erin described to me the way the number of items per page should work. She noted that when you change the number of items displayed, that the first item on the original page should remain displayed on the page somewhere. This does not happen currently.

        