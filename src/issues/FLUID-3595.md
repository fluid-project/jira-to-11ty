---json
{
  "title": "FLUID-3595",
  "summary": "There is no alt text for the page numbers in Pager component.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "y z",
  "date": "2010-04-05T12:34:02.000-0400",
  "updated": "2014-07-14T10:04:35.630-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "WIN 7 IE8, FF3.6\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3831/",
      "key": "FLUID-3831",
      "summary": "Make the tooltip work with the screen reader "
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2010-04-05T12:53:49.000-0400",
      "body": "Doesn't work only in demo portal, Sakai demo works well.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-14T10:04:35.628-0400",
      "body": "The demo includes the hover text. The markup driven example doesn't include hover text, and the annotated example only shows it after the table has been sorted by a particular column.\n"
    }
  ]
}
---
There is no alt text for the page numbers in Pager component. As per QA plan it should display first and last element on that page according to sorting.

        