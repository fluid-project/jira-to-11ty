---json
{
  "title": "FLUID-5173",
  "summary": "A model transformation unit test",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2013-10-08T12:55:44.364-0400",
  "updated": "2014-03-03T11:27:20.246-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": "Only fails in IE8.\n\nWorks fine with IE9, IE10, the latest version of firefox, safari and chrome\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5204/",
      "key": "FLUID-5204",
      "summary": "A number of Infusion's unit tests fail on IE 10."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-02-11T02:39:01.308-0500",
      "body": "This issue got reported again under <https://fluidproject.atlassian.net/browse/FLUID-5204#icft=FLUID-5204> and was resolved in trunk recently.\n"
    }
  ]
}
---
Use IE8 to open up: <http://build.fluidproject.org/infusion/tests/framework-tests/core/html/ModelTransformation-test.html>

Unit test #37 (arrayToSetMembership and setMembershipToArray transformation tests) fails with an error:

"Died on test #1 undefined: Object doesn't support this property or method"

        