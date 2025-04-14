---json
{
  "title": "FLUID-6153",
  "summary": "Scrollbars Are Visible In Preferences Panels",
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
  "reporter": "Michelle D'Souza",
  "date": "2017-04-21T16:50:36.403-0400",
  "updated": "2017-04-24T12:32:40.803-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "FF, Chrome\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6153/Scrollbars.png",
      "filename": "Scrollbars.png"
    }
  ],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2017-04-21T16:55:52.517-0400",
      "body": "Things I've seen fix this, from quick investigation:\n\n1\\) Changing overflow: auto to overflow: hidden (in theory this should be safe because height: auto should ensure the container is large enough)\n\n2\\) Changing line-height to \"normal\" (while I'm not certain of this, it sounds like line-height and height: auto are known to not play well together in many rendering models).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-04-24T10:24:05.549-0400",
      "body": "The issue appears to only be present in the \"desktop\" view. \n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-04-24T12:32:36.838-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/827) has been merged into the project repo master branch at 56cc1caafba6907f1ecf93cc3baf17b0e357ee97\n"
    }
  ]
}
---
The responsive version of UIO has introduced scrollbars inside the preferences panels. These are most obvious if you have your computer's 'always show scrollbars' setting set. Without that setting you can see the scrollbars by hovering over the panel and scrolling. 

        