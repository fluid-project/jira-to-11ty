---json
{
  "title": "FLUID-4223",
  "summary": "Uploader's options backwards compatibility unit tests are failing in Internet Explorer",
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
  "date": "2011-05-11T12:10:22.358-0400",
  "updated": "2011-06-24T12:45:39.561-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Internet Explorer 6 on Windows XP\\\nIE 8, 9 on Windows 7\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4227/",
      "key": "FLUID-4227"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4223/4227-ss1.png",
      "filename": "4227-ss1.png"
    }
  ],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-05-11T13:38:04.051-0400",
      "body": "Some testcase fails screenshot\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-16T15:27:05.286-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-06-24T12:45:39.559-0400",
      "body": "This has been fixed a while ago.  All the tests are passing in IE.\n"
    }
  ]
}
---
All the Uploader's options backwards compatibility tests are failing during IoC resolution of its subcomponents in Internet Explorer with the classic and dreaded "Object doesn't support this property or method - { "name": "TypeError", "message": "Object doesn't support this property or method", "number": -2146827850, "description": "Object doesn't support this property or method" }"

        