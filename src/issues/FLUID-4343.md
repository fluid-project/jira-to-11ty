---json
{
  "title": "FLUID-4343",
  "summary": "Fat Panel UIO doesn't style itself in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "heidi valles",
  "date": "2011-07-14T16:52:57.094-0400",
  "updated": "2013-04-11T17:06:19.658-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-07-14T16:53:08.158-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-15T11:04:59.861-0400",
      "body": "I did some investigation. It appears that the cookie is not being set in IE. The reason why you see that the settings change back to the default is that fat panel needs to refresh from the store on open to fix a FF issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-15T14:42:16.874-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/109>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-15T15:07:26.308-0400",
      "body": "Pull request merged into project repo at 983b40697fdad6c544415edab802d7bf0577f8d8\n"
    }
  ]
}
---
1\. Open fat panel demo, make some changes\
2\. Close and reopen panel\
3\. Styles are correct on open but quickly switch back to default styling

        