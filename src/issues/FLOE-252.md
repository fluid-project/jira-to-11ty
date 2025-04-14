---json
{
  "title": "FLOE-252",
  "summary": "Implement the back and next buttons to move around panels",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2015-01-29T10:44:49.622-0500",
  "updated": "2015-11-03T10:54:40.603-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-01-30T15:21:12.389-0500",
      "body": "Issued a pull request: <https://github.com/fluid-project/first-discovery/pull/4>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-02-05T10:58:59.360-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/4> ) into the project repository at 119e764d33194efce0b7df7a907cde5ce51368a1\n"
    }
  ]
}
---
1\. Render back and next based on the total number of pages;

* On the first page, only show "Next" button
* On the last page, only show "Back" button
* On the pages in btw, show both buttons

2\. Respond to back and next to change page;

3\. Tooltips for these buttons;

4\. Hook up with the editor component;

5\. Unit tests

        