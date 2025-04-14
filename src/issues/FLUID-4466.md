---json
{
  "title": "FLUID-4466",
  "summary": "Pager unit test suite crashes IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "heidi valles",
  "date": "2011-09-22T16:47:06.956-0400",
  "updated": "2014-06-25T15:55:53.551-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Pager",
    "Testing Infrastructure"
  ],
  "environment": "IE6, Win Xp\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T15:55:53.551-0400",
      "body": "We are no longer actively supporting IE6, IE7 and IE8. We will consider patches for some issues if they are offered.\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/tests/component-tests/pager/html/Pager-test.html>   crashes IE6

The tests that crash it are #12 and #13 but it's likely because those two tests have hundreds of tests within them and it's too much for IE6 to handle.

        