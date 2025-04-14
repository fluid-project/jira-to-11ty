---json
{
  "title": "FLUID-2800",
  "summary": "The preview window's title bar does not display until mouse over in simplified layout: using IE 6",
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
  "date": "2009-05-28T09:01:58.000-0400",
  "updated": "2013-10-04T10:24:20.442-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "IE 6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2800/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-28T09:02:26.000-0400",
      "body": "'screenshot-1' shows the title bar for the preview window is missing\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T11:03:03.651-0400",
      "body": "Simplified layout is no longer offered by UIO.\n"
    }
  ]
}
---
The preview window's title bar does not display until mouse over in simplified layout: using IE 6

Steps to reproduce:

1\) Open the sakai  mock-up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html#>

2\) Change to simplified layout and save changes

3\) Re-open the UI Options dialog, Notice that the Title bar for the preview window is missing

        