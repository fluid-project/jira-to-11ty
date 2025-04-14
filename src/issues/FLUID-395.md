---json
{
  "title": "FLUID-395",
  "summary": "Change avatar to small grey rectangle, as in mockups",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Anastasia Cheetham",
  "date": "2008-03-24T11:03:31.000-0400",
  "updated": "2011-01-26T11:08:05.007-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-402/",
      "key": "FLUID-402"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-464/",
      "key": "FLUID-464"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-311/",
      "key": "FLUID-311"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-487/",
      "key": "FLUID-487"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-521/",
      "key": "FLUID-521"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-02T16:58:25.000-0400",
      "body": "The code has been modified to make the avatar creation function pluggable, and the portlet exampes have been changed to provide the styling as in the mockups.\n\nThe only thing that isn't right is that the avatar is not positioned directly under the cursor as in the mockups. jQuery's ui.draggable has a 'cursorAt' option that will likely be used in the solution to this, but it currently has a bug: it doesn't work if scroll is turned on (which it is in the Reorderer).\n\nI've filed a ticket with jQuery about this (<http://dev.jquery.com/ticket/2643>), and in the meantime, we'll think about exactly how we will use the cursorAt once it's working. It might be pluggable in some way.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-04-07T14:00:38.000-0400",
      "body": "In IE7 (WinXp) the grey box avatar does not appear.&#x20;\n\nLink: <http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/uportal3-newskin/new_theme_sample_html.htm>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-08T19:17:12.000-0400",
      "body": "The problem was the css colour that was used.\n"
    }
  ]
}
---

        