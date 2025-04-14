---json
{
  "title": "FLUID-3935",
  "summary": "Resizing IE7 browser window creates odd behaviour for third column in demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "heidi valles",
  "date": "2010-12-17T11:10:30.158-0500",
  "updated": "2014-06-05T15:31:29.223-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "win xp, IE7\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3902/",
      "key": "FLUID-3902",
      "summary": "Right column wraps below other columns for layout reorderer demo in IE 6"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2010-12-17T11:56:13.707-0500",
      "body": "It also makes subsequent moving of items very bizarre, as the column jumps again once you pick up something.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-17T12:26:34.200-0500",
      "body": "This is likely caused by the fact the columns are using a relative size that adds up to less than 100% of the outer container. I suspect that somehow this calculation is not being done, or not being done correctly and thus the 3rd column is wrapping at the edge of the container.\n\nAside: The relative widths add to less to 100% to prevent a problem where the portlet divs don't size properly to the contents because of floating.\n"
    }
  ]
}
---
Resizing the browser window causes the third column to sometimes jump down to the first column, and sometimes not, giving the appearance of the third column flashing.

        