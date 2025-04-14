---json
{
  "title": "FLUID-2828",
  "summary": "Column headers don't show which is currently being sorted on when first going to Pager Sakai Demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Daphne Ogle",
  "date": "2009-05-28T14:40:43.000-0400",
  "updated": "2015-06-26T09:59:00.385-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Demos",
    "Pager"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2009-05-28T14:41:35.000-0400",
      "body": "The arrow should also display on rollover (like in google spreadsheets).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-11T14:41:31.074-0400",
      "body": "This demo is no longer in use.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:52.858-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
When I first go to the demo at:  <http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html> there is no indication which column is being used to sort.  Since the column headers are bolded black text they don't themselves look sortable which makes the sort arrow even more important to indicate you can use them for sorting.

Related to this, once the sort is changed the arrow displays but it does so right justified in the column.  It should be directly next to the text since that is what the user needs to click on to change the sort.  It's also what their eye will be drawn to.

        