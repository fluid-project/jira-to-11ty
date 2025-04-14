---json
{
  "title": "FLUID-406",
  "summary": "When dragging to empty columns, the drop target is not the full width of the column",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2008-03-25T16:28:06.000-0400",
  "updated": "2008-06-23T17:44:54.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-187/",
      "key": "FLUID-187",
      "summary": "Allow portlets to be dragged into empty columns"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-27T16:13:48.000-0400",
      "body": "This seems to be an issue with jQuery.ui - it is replicatable in the demo file that comes with the distribution.\n\nI have filed a ticket with jQuery: <http://dev.jquery.com/ticket/2601>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-27T17:07:15.000-0400",
      "body": "Fixed using Scott Gonzalez tip in <http://dev.jquery.com/ticket/2601>\n"
    }
  ]
}
---
Empty columns are originally displayed very narrow. When an item is dragged over an empty column, the column expands however, the item is only moved if the mouse is release when it is over the originally visible portion of the column.&#x20;

        