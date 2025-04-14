---json
{
  "title": "FLUID-3625",
  "summary": "The \"Go Back\" links in the Mobile FSS demo are all broken.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "James Yoon",
  "reporter": "Justin Obara",
  "date": "2010-04-12T11:19:36.000-0400",
  "updated": "2014-07-14T10:23:38.327-0400",
  "versions": [
    "1.2beta1",
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-14T10:23:38.326-0400",
      "body": "This demo no longer exists.\n"
    }
  ]
}
---
The "Go Back" links in the Mobile FSS demo are all broken.

Steps to reproduce:

1\) Open the mobile fss demo\
<http://build.fluidproject.org/infusion/demos/fss/mobile/demo.html>

2\) Click on the "Thumbnail link"

3\) Click on any of the "Go Back" links

Notice that it tries to navigate to this URL: <http://build.fluidproject.org/infusion/demos/fss/mobile/html/index.html>

        