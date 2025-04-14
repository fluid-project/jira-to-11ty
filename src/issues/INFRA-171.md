---json
{
  "title": "INFRA-171",
  "summary": "Confluence Collaborative Editing corrupted link to attachments",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-04-27T13:13:04.101-0400",
  "updated": "2018-04-27T13:41:03.410-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-27T13:14:29.608-0400",
      "body": "Support request CSP-227146 opened for this issue.\n\n```\nHi Giovanni, this is a known bug from Confluence 6.7.2 and it was fixed in Confluence 6.8.0: https://jira.atlassian.com/browse/CONFSERVER-51998.\r\nThe problem is only triggered when you edit pages with the Collab. \r\nEditing on. Do you know if you can reproduce the problem in Confluence \r\n6.8.1? This test should be done in new pages instead of existing ones.\r\nThe bug would not fix the problem in case the page was edited before 6.8.0.\n```\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-27T13:15:04.662-0400",
      "body": "Tested that collab editing doesn't corrupt links anymore in Confluence 6.8.1\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-27T13:19:50.417-0400",
      "body": "Created support request CSP-227588 for inability of the \"Insert/Edit\" to show more than 50 attachments and lack of pagination, which requires using the search feature to locate attachments (and requires extra typing).\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-27T13:41:03.407-0400",
      "body": "Manually fixed 100+ broken links.\n"
    }
  ]
}
---
Issue introduced in Confluence 6.7.2 and fixed in 6.8.0 went unnoticed. Links to attachments in this page (and likely others) are broken:

<https://wiki.fluidproject.org/display/fluid/Presentations>

        