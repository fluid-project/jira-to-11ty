---json
{
  "title": "FLUID-2330",
  "summary": "Implement cookies for persistence of UI Options preferences",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2009-03-10T17:06:39.000-0400",
  "updated": "2009-06-03T13:40:21.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2331/",
      "key": "FLUID-2331"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2332/",
      "key": "FLUID-2332"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-17T10:40:43.000-0400",
      "body": "Cookies are now used for persistence but the persistence strategy needs to be made pluggable.&#x20;\n"
    }
  ]
}
---
We'd like a simple way of persisting UI Options preferences for use in scenarios like the Fluid website.

        