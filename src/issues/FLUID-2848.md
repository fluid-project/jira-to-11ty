---json
{
  "title": "FLUID-2848",
  "summary": "Styling for reorderable tabs is broken: using IE 7",
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
  "date": "2009-05-29T14:21:04.000-0400",
  "updated": "2009-06-02T09:34:30.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE 7 (Win VIsta)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2848/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-29T14:21:30.000-0400",
      "body": "'screenshot-1' shows the broken styling\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-02T09:34:30.000-0400",
      "body": "Tested on another IE 7 (Win Vista) system, and the error did not occur. Likely issue with test system used before.\n"
    }
  ]
}
---
Styling for reorderable tabs is broken

Steps to reproduce:

1\) Open the sortable jQuery UI tabs example\
<http://build.fluidproject.org/infusion/standalone-demos/reorderer/html/jquery-tabs.html>

Notice that the Tabs are displayed as a list

        