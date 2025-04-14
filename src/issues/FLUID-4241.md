---json
{
  "title": "FLUID-4241",
  "summary": "Uploader demo throws an error when switching from the concrete to any of the IoC versions of uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-05-16T12:36:52.285-0400",
  "updated": "2011-07-08T16:08:30.969-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "Uploader"
  ],
  "environment": "IE 8 (Win 7)\\\nIE 7 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:01:33.966-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-05-17T13:21:03.336-0400",
      "body": "Buttons have been removed from the demo as we now have full integration tests to ensure all uploader configurations are properly instantiated.  See <https://fluidproject.atlassian.net/browse/FLUID-4243#icft=FLUID-4243> for more details\n"
    }
  ]
}
---
Steps to reproduce

1\) Open the uploader demo\
<http://build.fluidproject.org/infusion/demos/uploader/demo.html>

2\) click on the "Concrete Uploader" button

3\) click on either of the IoC uploader buttons

Notice that an error is thrown. This doesn't happen if you click one of the IoC buttons without clicking the "Concrete Uploader" one previously.

Error\
\-------\
Error: 'null' is null or not an object\
File: uploader.html\
Line: 1

        