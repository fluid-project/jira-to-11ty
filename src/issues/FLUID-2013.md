---json
{
  "title": "FLUID-2013",
  "summary": "Springboard:  Horizontal scroll bar displays at bottom on the column on click of a box in the column.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Daphne Ogle",
  "date": "2008-12-17T14:32:17.000-0500",
  "updated": "2013-04-11T17:53:03.688-0400",
  "versions": [
    "0.6"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Mac OSX 10.5, Firefox 3.0\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2013/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-18T10:27:54.000-0500",
      "body": "'screenshot-1' shows the scrollbar\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-01-06T11:27:33.000-0500",
      "body": "overflow:auto was on elements that didnt need it. Refactored fluid.layout.css to handle this.\n"
    }
  ]
}
---
This is just a little strange but doesn't keep user from completing their task.

On selecting an object in a column, a horizontal scroll bar displays at the bottom of the column and as the object is moved to another column that column gets the horizontal scroll.  It looks like whichever column has an object selected has the scroll bar.

        