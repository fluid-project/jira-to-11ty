---json
{
  "title": "FLUID-2313",
  "summary": "\"previewEnhancer is undefined\" error is thrown in unit tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2009-03-06T09:40:30.000-0500",
  "updated": "2009-03-20T16:30:41.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2358/",
      "key": "FLUID-2358",
      "summary": "Changing radio button selection throws an error: using IE 7"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-12T12:46:16.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-20T16:21:46.000-0400",
      "body": "I've reviewed this change with Michelle. It's odd that the guard is necessary, but it works, and causes no problems. +1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-20T16:30:41.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2(Mac OS 10.5)\\\nFF2, FF3, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
"previewEnhancer is undefined" error is thrown in unit tests

Steps to reproduce

1\) Open the UI Options unit test page\
<http://build.fluidproject.org/fluid/tests/fluid-tests/UIOptions-test.html>

Notice that an error is thrown

Error: previewEnhancer is undefined\
Line: 238\
File: UIOptions.js

        