---json
{
  "title": "FLUID-776",
  "summary": "OSDPL: Fix searching by automating reindexing of OSDPL site via Cron",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-06-13T10:57:22.000-0400",
  "updated": "2014-04-02T16:35:54.741-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jess Mitchell",
      "date": "2008-08-05T16:39:26.000-0400",
      "body": "\\-\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-07T16:51:53.000-0500",
      "body": "cron will be set up shortly (Jan 8. 09)?\n\nCurrently removed Searching from the site as there isn't much content to search for and we're waiting for cron.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-14T12:50:01.000-0500",
      "body": "Cron has been added (rather, osdpl was added to cron).\n"
    }
  ]
}
---
To ensure that the Search function continues to work over time, the site should be reindexed automatically and periodically.&#x20;

This means making a cron job to reindex.

See this drupal page for documentation:\
<http://drupal.org/cron>

        