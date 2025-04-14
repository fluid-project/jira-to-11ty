---json
{
  "title": "FLUID-3531",
  "summary": "Sorting of table does not work for column with checkbox elements",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Armin Krauss",
  "date": "2010-03-18T17:08:15.000-0400",
  "updated": "2014-07-14T09:51:37.564-0400",
  "versions": [
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "Mac OS X 10.6 / Firefox 3.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-14T09:51:37.563-0400",
      "body": "This demo no longer exists.\n"
    }
  ]
}
---
In the Sakai example (<http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html>) it is not possible to\
check of some items in the first column and sort the elements by this column. Instead all checked boxes are reset to being unchecked.

To reproduce:

* Load <http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html>
* Mark a few lines in the first column
* Click in the middle of the column header of the first column to sort by the checked items
* A little arrow will appear in the header and all checked items will be unchecked.

        