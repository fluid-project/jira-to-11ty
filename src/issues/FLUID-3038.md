---json
{
  "title": "FLUID-3038",
  "summary": "create a builder.php file which is a conduit to hidden php files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-07-15T16:01:50.000-0400",
  "updated": "2009-08-25T14:51:27.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2931/",
      "key": "FLUID-2931"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-07-15T16:06:10.000-0400",
      "body": "It is necessary to hide the operational php files (postProcessor, jsonProcessor, etc) in a non-web accessible directory so that they cannot be hit by any hacks or accidendentally accessed. They must be accessed via a post from the web page. As such, we need to create a php file which will redirect to those hidden files.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-08-25T14:51:22.000-0400",
      "body": "builder.php implemented and working on the fluidproject website.\n"
    }
  ]
}
---

        