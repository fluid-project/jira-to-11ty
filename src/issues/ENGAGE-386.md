---json
{
  "title": "ENGAGE-386",
  "summary": "Styling issues with the catalogue view",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2010-02-12T16:50:37.000-0500",
  "updated": "2017-12-22T09:44:31.979-0500",
  "versions": [
    "0.3b",
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Catalogue"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-488/",
      "key": "ENGAGE-488",
      "summary": "Truncate 'View all in' string in Catalogue View"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-03-02T17:05:36.000-0500",
      "body": "The truncation is quite complicated and has been pushed to 0.5\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:31.978-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
Generally:

* List-view specific: Combination of name and subtext (two lines) should be vertically centered in each item
* Grid-view specific: Thumbnails should be 64x64 and centered in the screen (refer to wireframes to minimize excess whitespace)

Default catalogue view:

* "View all in--" should truncate after one line (i.e., should not extend to multiple lines)

All list view:

* "all objects" should read "All objects"

        