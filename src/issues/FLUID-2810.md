---json
{
  "title": "FLUID-2810",
  "summary": "Table of Contents in UIOptions has a non default radio button controls (small and square) in Opera 9.6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "y z",
  "date": "2009-05-28T12:09:13.000-0400",
  "updated": "2013-10-04T10:23:52.388-0400",
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
  "environment": "Opera 9.6 - WinXP, Mac OS 10.5\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2810/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-06-02T10:16:01.000-0400",
      "body": "'screenshot-1' shows the non-standard radio buttons for Table of Contents.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T10:56:22.216-0400",
      "body": "The UIO dialog doesn't use radio buttons anymore.\n"
    }
  ]
}
---
To reproduce open Sakai UI Options example: <http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

* open ui options dialog
* go to easier to find tab
* notice that Table of Contents menu item has small and square radio button (different from default)

        