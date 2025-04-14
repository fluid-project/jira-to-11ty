---json
{
  "title": "FLUID-2799",
  "summary": "Links label too low in simplified layout mode",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2009-05-28T08:43:47.000-0400",
  "updated": "2013-10-04T10:24:26.703-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2799/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-28T08:44:40.000-0400",
      "body": "\"screenshot-1\" shows the \"Links\" label at the bottom of the set of radio buttons instead of at the top\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T11:03:36.530-0400",
      "body": "Simplified layout is no longer offered by UIO.\n"
    }
  ]
}
---
Links label too low in simplified layout mode

Steps to reproduce:

1\) Open the  sakai mock-up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html#>

2\) Change to the simplified layout and save changes

3\) Re-open the ui options dialog and go to the easier to find section

Notice that the links label is at the bottom of the set of radio buttons instead of at the top.

        