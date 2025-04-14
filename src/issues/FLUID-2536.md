---json
{
  "title": "FLUID-2536",
  "summary": "Inline Edit test fails: using IE 8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Escalated",
  "assignee": "Golam Chowdhury",
  "reporter": "Justin Obara",
  "date": "2009-04-06T11:30:13.000-0400",
  "updated": "2014-06-25T16:16:10.803-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 8 (Win Vista, WIn XP, Win7)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4068/",
      "key": "FLUID-4068"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T08:59:02.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-25T23:09:05.000-0400",
      "body": "It is possible that this is an IE8-specific bug with respect to visibility calculation. On the other hand, something else may be going on. To aid debugging, please try commenting out the \"assertVisState\" test on line 582, as well as all lines following \"var redoControl\", reduce the test count to 9 and report whether the \"Model state should now be\" test 9 now passes.\n\nNote that the specific test in error is \"Self-rendering with undo control \".\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-26T12:43:56.000-0400",
      "body": "Following the above directions, will result in no failing tests\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-10-06T15:57:31.000-0400",
      "body": "This unit test is now numbered 30.9 (and is still failing in IE8)\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-08T14:14:58.723-0400",
      "body": "It seems like the  jquery is(':hidden') where hidden selector is broken in IE8 and here are my findings:\n\n<http://forum.jquery.com/topic/hidden-visible-broken-in-ie8>\n\n<http://www.code-styling.de/english/jquery-132-causes-problems-at-ie-8>\n"
    }
  ]
}
---
Inline Edit test fails

Steps to reproduce:

1\) Run the inline edit unit tests\
<http://build.fluidproject.org/infusion/tests/component-tests/inlineEdit/html/InlineEdit-test.html>

Notice that Test 26.9 (undo container should not be visible) fails.

        