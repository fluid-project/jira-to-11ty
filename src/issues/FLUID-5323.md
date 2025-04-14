---json
{
  "title": "FLUID-5323",
  "summary": "Builder unit test fails in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Cindy Li",
  "date": "2014-04-25T13:06:22.350-0400",
  "updated": "2014-04-30T12:00:09.870-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "IE8\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5166/",
      "key": "FLUID-5166",
      "summary": "UIOptions Builder-test.html fails in IE8"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-04-28T09:43:20.131-0400",
      "body": "Submitted a pull request\n\n<https://github.com/fluid-project/infusion/pull/500>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-04-28T14:51:03.349-0400",
      "body": "Merged into the project repo @ 74407b3829f86f2a3d1ded08ef2a83c8868f0c42\n"
    }
  ]
}
---
The builder unit test (<http://build.fluidproject.org/infusion/src/tests/framework-tests/preferences/html/Builder-test.html>) fails in IE8 with an error:

Object doesn't support this property or method\
Source:  <http://build.fluidproject.org/infusion/src/tests/framework-tests/preferences/js/BuilderTests.js:896>&#x20;

The failure doesn't happen in other infusion supported browsers.

        