---json
{
  "title": "STUDIO-14",
  "summary": "Studio doesn't look great in IE8",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Anastasia Cheetham",
  "date": "2011-12-08T11:41:47.312-0500",
  "updated": "2014-03-03T11:58:25.431-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": "IE8 on Windows 7 and Windows XP\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/STUDIO-15/",
      "key": "STUDIO-15"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/STUDIO/STUDIO-14/IE8-bad-studios-styling.jpg",
      "filename": "IE8-bad-studios-styling.jpg"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-12-08T11:43:43.967-0500",
      "body": "This screenshot (IE8-bad-studios-styling.jpg) shows what the Studios site looks like in IE8.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-15T10:42:41.075-0500",
      "body": "Merged into project repo at 9f49d91bdf223e1f154e9c517327b7e55cae0bb5\n"
    }
  ]
}
---
In IE 8, there are a number of visual styling problems (a screenshot will come):

* the login/logout and Display Preferences buttons overlap
* there's a small gap at the top of the screen, likely the UIO panel (which should be invisible)
* the line above the tags extends fully to the left of the page (shouldn't go over the sidebar)

        