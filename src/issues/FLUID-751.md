---json
{
  "title": "FLUID-751",
  "summary": "OSDPL Searches do not appear to work and indexing doesn't help",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Allison Bloodworth",
  "date": "2008-06-10T02:57:15.000-0400",
  "updated": "2008-06-23T16:58:50.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-10T02:57:26.000-0400",
      "body": "iteration11\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-06-13T10:43:28.000-0400",
      "body": "Seems like the reindex from the Search module doesn't work.\n\nInstead use command from the Administer -> Logs -> Status Report -> Cron maintenance tasks -> Click \"You can run cron manually\".\n\nSearch now works fine.\n\nWe should automate this... that's another task.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-06-23T16:58:50.000-0400",
      "body": "Finished for now. New task would be to automate the reindexing. See this issue:\\\n<http://issues.fluidproject.org/browse/FLUID-776>\n"
    }
  ]
}
---
Not sure why indexing isn't working. When the indexing is run at <http://osdpl.fluidproject.org/admin/settings/search>, it says "0% of the site has been indexed. There are 23 items left to index." No results are returned when searching on common terms like "content."

        