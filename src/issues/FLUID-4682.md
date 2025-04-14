---json
{
  "title": "FLUID-4682",
  "summary": "Multiple column reordering doesnot work with jquery 1.7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Nicholas Mayne",
  "date": "2012-03-31T17:29:30.987-0400",
  "updated": "2014-03-03T12:58:36.597-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-04-04T20:31:00.082-0400",
      "body": "I upgraded jQuery UI to its latest version also (1.8.18) and this issue went away. One doesn't expect this kind of gratuitous incompatibility at minor point releases, but there it is 🙂\n"
    },
    {
      "author": "Nicholas Mayne",
      "date": "2012-04-07T10:14:23.203-0400",
      "body": "I have done more investigation and it appears to be an issue with Firefox 12.\n"
    },
    {
      "author": "Nicholas Mayne",
      "date": "2012-04-07T16:04:31.689-0400",
      "body": "FYI - looks like someone els ehas looked at a patch form another project. <https://jira.sakaiproject.org/browse/SAKIII-4305>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T12:58:33.147-0500",
      "body": "Resolved by commit of <https://fluidproject.atlassian.net/browse/FLUID-4684#icft=FLUID-4684> at 1f04a2\n"
    }
  ]
}
---
Described in the documentation <http://wiki.fluidproject.org/display/fluid/Tutorial+-+Layout+Reorderer+Selectors> and also in version 1.4 multi select works, but if you swap out jquery with the 1.7 version (latest), when dragging a widget aroudn the page the selector only selects the first column which means you can drop in to any other columns.

        