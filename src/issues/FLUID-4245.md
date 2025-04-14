---json
{
  "title": "FLUID-4245",
  "summary": "FSS Reset and Base demos are missing comparison",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2011-05-16T13:01:01.211-0400",
  "updated": "2011-06-14T09:50:03.563-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "FSS"
  ],
  "environment": "IE 8 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4245/fss-base-may-30-2011.png",
      "filename": "fss-base-may-30-2011.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4245/fss-base-screenshot.png",
      "filename": "fss-base-screenshot.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4245/fss-reset-may-30-2011.png",
      "filename": "fss-reset-may-30-2011.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4245/fss-reset-screenshot.png",
      "filename": "fss-reset-screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-16T13:44:22.275-0400",
      "body": "fss-base-screenshot and fss-reset-screenshot show the demos with the missing comparisons.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:39:42.671-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-30T14:30:18.927-0400",
      "body": "Attached fss-base-may-30-2011.png and fss-reset-may-30-2011.png, which shows that the problem no longer occurs in IE8 WinXP. &#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-31T14:53:16.308-0400",
      "body": "Cannot reproduce as of:\\\ncommit 01a994f19c5adcba2594ac322a828961a02daada\\\nDate:   Mon May 30 15:45:40 2011 -0600\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-06-14T09:50:03.561-0400",
      "body": "I tried again with IE8 Win XP today and couldn't reproduce the issue.\n"
    }
  ]
}
---
The demos are only showing the single default version and not the one with the FSS applied. These are both separate iFrames.

Steps to reproduce

1\) Open the base and/or reset demos\
<http://build.fluidproject.org/infusion/demos/fss/reset/demo.html>\
<http://build.fluidproject.org/infusion/demos/fss/base/demo.html>

2\) Notice that only the default styling is shown, and not the FSS version.

        