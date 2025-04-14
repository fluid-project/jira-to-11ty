---json
{
  "title": "FLUID-5689",
  "summary": "Pager demo tooltips out of sync with table",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Simon Bates",
  "date": "2015-06-12T17:37:31.567-0400",
  "updated": "2016-07-14T08:12:56.476-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2016-02-10T15:44:11.096-0500",
      "body": "This issue can also be produced by loading the demo, and then changing the sort order to alphabetical order. The tooltip for Page 1 will show the tooltip for the previous sort order.\n"
    },
    {
      "author": "Dinuka Desilva",
      "date": "2016-03-05T13:24:53.815-0500",
      "body": "I'm working on this\n"
    },
    {
      "author": "Dinuka Desilva",
      "date": "2016-03-09T11:32:12.679-0500",
      "body": "This is done.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-14T08:10:29.332-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/677> ) into the project repo at dacc70fc5318f4f944c54ea7c316b61a307be221\n"
    }
  ]
}
---
It is possible to make the Pager Demo tooltips out of sync with the table contents.

To reproduce:

* Open the Pager Demo
* Click on the "3" button to go to page 3
* Change the Items per page to 10
* The table lists "Saundra Livingstone" to "Jamie Steely"

Expected:

* Tooltip for the page 3 button to say "Saundra Livingstone - Jamie Steely"

Actual:

* Tooltip for the page 3 buttons says "Darcy Shy - Tommie Slunaker"

        