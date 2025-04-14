---json
{
  "title": "FLUID-1107",
  "summary": "Inline Edit undo unit tests are not working in IE",
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
  "date": "2008-08-06T13:27:10.000-0400",
  "updated": "2008-09-26T15:13:44.000-0400",
  "versions": [
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1107/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-06T13:27:53.000-0400",
      "body": "'screenshot-1' shows the failed test\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-26T15:20:08.000-0400",
      "body": "The issue now seems to be that in IE7 there is a runtime error\n\nLine 25: range.select();\\\nError: Unspecified error\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-26T15:13:44.000-0400",
      "body": "Appears to have been resolved with one of the many changes leading up to the 0.5 release\n\nVerified using:\n\nIE7, IE6 (Win XP)\\\nIE7 (Win Vista)\n"
    }
  ]
}
---
InlineEdit Tests module: Self-rendering with undo control are not working in Internet Explorer.\
(test 19)

        