---json
{
  "title": "ENGAGE-488",
  "summary": "Truncate 'View all in' string in Catalogue View",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2010-03-02T17:04:31.000-0500",
  "updated": "2017-12-22T09:44:17.473-0500",
  "versions": [],
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
      "url": "/browse/ENGAGE-386/",
      "key": "ENGAGE-386"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:17.469-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
"View all in--" should truncate after one line (i.e., should not extend to multiple lines)&#x20;

The issue with this truncation is that we need to truncate the string before the number of items.&#x20;

        