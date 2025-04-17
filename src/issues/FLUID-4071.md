---json
{
  "title": "FLUID-4071",
  "summary": "Sorted column should drive the text in Pager tooltips",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2011-02-16T15:16:11.579-0500",
  "updated": "2014-03-03T13:38:44.454-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-02-17T10:10:23.683-0500",
      "body": "This happens on Chrome, IE7, IE8, FF3.6 on Win XP as well.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-02-17T11:00:47.560-0500",
      "body": "To clarify why tooltips should be implemented this way, here's an example:\\\nPage 1 has the following data in Name and Email columns: Alex a\\@foo.com, Betsy b\\@foo.com, Carlos amazing\\@foo.com\n\nNow:\n\n* sort by email\n* Page 1 will be ordered: Alex a\\@foo.com, Carlos amazing\\@foo.com, Betsy b\\@foo.com,&#x20;\n* the tooltip for page 1 will be: \"Alex | Betsy\"\n\nThis is misleading because the tooltip implies there are only results from Alex to Betsy inclusive. But when you visit Page 1, it actually includes Carlos which doesn't fit the pattern.\n\nWorse case scenario is if a user has a lot of data and is looking for one particular result, the user may never find that record if using the tooltips alone.\n\nSo the only way to ensure that the tooltips are accurate is to display tooltips based on the sort column.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-07-22T21:17:40.125-0400",
      "body": "Merged into trunk at revision acf4633. This facility is now present using the new boolean-valued option \"annotateSortedColumn\"\n"
    }
  ]
}
---
The page navigation links always display tooltips using data from the first column, and not the column being used to sort.

Example:

* load <http://build.fluidproject.org/infusion/demos/pager/demo.html>
* sort by email
* hover over page 2 link.
* tooltip reads "Arturo Hayhurst | Brendan Anagnos" but it should be "arturo.hayhurst\@local.host | brendan.anagnos\@local.host"

        