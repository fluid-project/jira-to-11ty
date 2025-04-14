---json
{
  "title": "DECA-130",
  "summary": "The right page can be dropped under the left page",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2010-07-12T11:25:01.844-0400",
  "updated": "2012-05-25T13:40:56.647-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Calibration"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3677/",
      "key": "FLUID-3677",
      "summary": "Using the listReorderer to drag between columns breaks when dropping the right item on the right side of the left item."
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-130/Screenshot-Decapod Camera Calibration - Mozilla Firefox.png",
      "filename": "Screenshot-Decapod Camera Calibration - Mozilla Firefox.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-07-12T11:30:40.784-0400",
      "body": "Added a screenshot which shows the page in the wrong position after the drag and drop operation\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-07-14T09:26:54.925-0400",
      "body": "Currently we removed drag and drop due to this issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-25T13:40:56.646-0400",
      "body": "The calibration work flow has been removed from this release\n"
    }
  ]
}
---
The right page can be dropped under the left page

Steps to reproduce:

1\) Open the left/right calibration page

2\) Swap  the pages by dragging the right one to the left hand side.\
Notice that if you drop over the right hand side of the left page, it will drop under neath of the left page instead of shifting the position of the pages

        