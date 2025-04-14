---json
{
  "title": "FLUID-3122",
  "summary": "Image Reorderer default API, sample code, and documentation still use the old-style id-based scheme for identifying and communicating orderables.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-08-21T10:50:09.000-0400",
  "updated": "2009-10-05T16:24:45.000-0400",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3131/",
      "key": "FLUID-3131",
      "summary": "The default afterMove event listener code for the Image Reorderer doesn't get invoked, causing no results to be sent back to the server."
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-3226/",
      "key": "FLUID-3226"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-08-25T23:02:03.000-0400",
      "body": "I've got a working draft of the new afterMove page here:\n\n<http://wiki.fluidproject.org/display/fluid/Talking+to+the+Server+Using+The+afterMove+Event>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-09-21T10:03:03.000-0400",
      "body": "Bug Parade Infusion 1.1.2\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-05T13:52:44.000-0400",
      "body": "These are related in that changes to the default CSS and demo have affected the unit tests. I've fixed this issue in r8229.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-05T15:03:16.000-0400",
      "body": "The last  fixes went in for this issue as of r8235. I'd appreciate review for these.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-05T15:09:04.000-0400",
      "body": "The documentation side of this JIRA has been moved to <https://fluidproject.atlassian.net/browse/FLUID-3226#icft=FLUID-3226> so that we can wind this one down for bug parade.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-05T15:12:14.000-0400",
      "body": "Reviewed and it looks good.\n"
    }
  ]
}
---
At the moment, our standalone Image Reorderer example, our documentation, and the default API all suggest that there's a required contract for using prefix:name:suffix-type IDs in the old RSF/Image Gallery style.

This is a complex solution for newcomers, and is entirely unnecessary with the modern Reorderer API. We should do the following:

1\. Create a new standalone demo that takes a lighter approach to markup, without imposing an id-based contract\
2\. Improve the documentation to reflect this\
3\. Delete the obsolete afterMove Callback page located here: <http://wiki.fluidproject.org/display/fluid/afterMove+Callback>

        