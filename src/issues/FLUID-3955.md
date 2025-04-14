---json
{
  "title": "FLUID-3955",
  "summary": "There are failing tooltip tests in the Pager unit tests: IE9",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2010-12-18T13:23:36.061-0500",
  "updated": "2015-06-09T09:14:53.491-0400",
  "versions": [
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "IE9 (Win7)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4080/",
      "key": "FLUID-4080"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3955/Screen shot.png",
      "filename": "Screen shot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-18T13:24:01.673-0500",
      "body": "\"Screen shot\" shows the failing tests\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-09T09:14:53.486-0400",
      "body": "IE9 is no longer supported and cannot reproduce in IE 11 (the only currently supported version of IE)\n"
    }
  ]
}
---
Some of the tooltip tests in the pager unit tests are failing.

Steps to reproduce:

1\) Run the pager unit tests. Notice that some of the tests related to the tooltip are failing.\
<http://build.fluidproject.org/infusion/tests/component-tests/pager/html/Pager-test.html#>

        