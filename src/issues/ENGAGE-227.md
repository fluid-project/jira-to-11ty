---json
{
  "title": "ENGAGE-227",
  "summary": "Ensure that the Screen Navigator doesn't impose direct dependencies on content displayed within it.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jacob Farber",
  "date": "2009-08-18T14:31:13.000-0400",
  "updated": "2017-12-22T09:44:18.682-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Screen Navigator"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-227/SN_JS_TEST.patch",
      "filename": "SN_JS_TEST.patch"
    }
  ],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-09-18T10:44:14.000-0400",
      "body": "Added a test patch for experimenting with javascript evaluation on ajax load\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:18.681-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
At the moment, the Screen Navigator requires that content displayed in it implements a particular JavaScript contract with the ScreenNavigator in order for it to work. This coupling means that all content displayed in ScreenNavigator must be modified to support its use. Let's invert the dependency so that content can be used as-is.

As understand it, we'll need a way to delay execution of inline script block until they've been suitably manipulated by the Screen Navigator.

        