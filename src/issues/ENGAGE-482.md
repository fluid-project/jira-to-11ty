---json
{
  "title": "ENGAGE-482",
  "summary": "Ensure all components are amenable to being displayed within the Screen Navigator",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-03-01T13:11:32.000-0500",
  "updated": "2014-03-03T13:45:33.351-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-158/",
      "key": "ENGAGE-158"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-482/ENGAGE-482-css.patch",
      "filename": "ENGAGE-482-css.patch"
    }
  ],
  "comments": []
}
---
At the moment, there are a number of hard-baked assumptions about how URLs are handled on the client side that cause our components to break when hosted within the ScreenNavigator. We need to place a layer of indirection between components and the URL space, including how they access query parameters and get/set window.location.

        