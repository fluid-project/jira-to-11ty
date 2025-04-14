---json
{
  "title": "FLUID-4201",
  "summary": "Column styles don't work for right-side fixed-width columns",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Anastasia Cheetham",
  "date": "2011-05-04T09:21:40.585-0400",
  "updated": "2011-05-04T12:15:25.091-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4202/",
      "key": "FLUID-4202"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The current FSS styles designed for mixed-width columns (i.e. one fixed width, one flexible width) assume that the fixed width column is on the left side of the page: the flexible-width column forces a left margin to accommodate the sidebar. This doesn't work for a right-side sidebar.

Users could easily extend the FSS, but it would be nice if we had built-in support for both configurations. Perhaps "fl-col-mixed-XX" (where XX is the desired width of the fixed-width column) could be replaced with "fl-col-mixed-right-XX" and "fl-col-mixed-left-XX"

.fl-col-mixed-left-200 .fl-col-fixed {width:200px;}\
.fl-col-mixed-left-200 .fl-col-flex {margin-left:220px;}

.fl-col-mixed-right-200 .fl-col-fixed {width:200px;}\
.fl-col-mixed-right-200 .fl-col-flex {margin-right:220px;}

The fixed-width columns could even add the "fl-force-X" alignment styles, so the user doesn't have to:

.fl-col-mixed-left-200 .fl-col-fixed {width:200px; float:left; display:inline;}\
.fl-col-mixed-left-200 .fl-col-flex {margin-left:220px;}

.fl-col-mixed-right-200 .fl-col-fixed {width:200px; float:right; display:inline;}\
.fl-col-mixed-right-200 .fl-col-flex {margin-right:220px;}

(with the current styles, the user has to add "fl-force-left" to the fixed with column)

We would keep the old class names, for backward compatibility.

        