---json
{
  "title": "FLUID-3602",
  "summary": "Spaces between and after columns appear wherever percentage columns are present",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "heidi valles",
  "reporter": "James Yoon",
  "date": "2010-04-05T16:35:37.000-0400",
  "updated": "2011-03-15T13:29:30.183-0400",
  "versions": [
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "FSS"
  ],
  "environment": "Safari 4.0 (OS X 10.5)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3602/Picture 8.png",
      "filename": "Picture 8.png"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-01-06T15:36:53.741-0500",
      "body": "I wonder if the spaces are intentional.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-15T13:29:30.151-0400",
      "body": "If I'm not mistaken, the spaces between the columns are intentional, to distinguish between the different columns. The spaces at the ends are due to sub-pixel rounding in the browsers. see <https://fluidproject.atlassian.net/browse/FLUID-2447#icft=FLUID-2447>\n"
    }
  ]
}
---
See attached screenshot of <http://build.fluidproject.org/infusion/tests/framework-tests/fss/html/2.fss.layout.columns.html> in Safari 4/OS X 10.5

        