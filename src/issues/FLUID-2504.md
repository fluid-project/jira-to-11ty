---json
{
  "title": "FLUID-2504",
  "summary": "Flexible column uses up an additional row if window resized to below a certain threshold",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2009-04-03T12:38:13.000-0400",
  "updated": "2015-06-26T09:57:12.575-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "FSS"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nChrome 4, FF2, FF3, FF3.6, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2504/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-05-01T14:57:04.000-0400",
      "body": "The immediate fix is to pull the column dimension numbers further away from totaling 100%, resulting is a less perfect overall picture but a more stable experience\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-31T15:30:19.000-0400",
      "body": "screenshot-1 shows the extra row at the bottom.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:27.079-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:48.654-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The flexible column uses up an additional row if the window is resized horizontally such that the flexible column width is under \~100 pixels (possibly due to the text in there)

        