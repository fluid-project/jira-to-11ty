---json
{
  "title": "FLUID-3084",
  "summary": "Unit test for cookies failing",
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
  "date": "2009-08-10T14:47:55.000-0400",
  "updated": "2010-04-15T11:45:42.000-0400",
  "versions": [
    "1.1.1"
  ],
  "fixVersions": [],
  "components": [
    "UIEnhancer"
  ],
  "environment": "Safari 3 (Mac OS 10.4)\\\nIE 7, IE 8 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3084/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-08-10T14:49:05.000-0400",
      "body": "\"screenshot-1\" shows the failing unit test\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-10T14:49:22.000-0400",
      "body": "This may be an issue of running the test locally as they seem to run fine from the server.\n"
    },
    {
      "author": "y z",
      "date": "2010-04-15T11:45:42.000-0400",
      "body": "Tests are passing now\n"
    }
  ]
}
---
Unit test for cookies failing

Steps to reproduce:

1\) Open the UI Enhancer Tests page\
<http://build.fluidproject.org/infusion/tests/component-tests/uiOptions/html/UIEnhancer-test.html>

Notice that the third set of tests is failing

        