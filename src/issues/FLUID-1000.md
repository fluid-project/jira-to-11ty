---json
{
  "title": "FLUID-1000",
  "summary": "Keyboard-a11y unit tests won't run in IE due to error",
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
  "date": "2008-07-23T18:20:49.000-0400",
  "updated": "2008-07-29T15:52:16.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "IE6, IE7 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-29T15:46:02.000-0400",
      "body": "The test has been changed to reflect browser differences.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-29T15:52:16.000-0400",
      "body": "Verified fix  using IE6, IE7\n"
    }
  ]
}
---
Keyboard-a11y unit tests won't run in IE due to error

Error Message:

Line: 51\
Char: 9\
Error: Expected identifier, string or number\
Code: 0 \
URL: <http://build.fluidproject.org/fluid/tests/jquery-tests/keyboard-a11y-tests.html>

        