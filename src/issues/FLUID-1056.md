---json
{
  "title": "FLUID-1056",
  "summary": "Reorder layout API unit test failed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Herb Wideman",
  "date": "2008-07-29T11:19:06.000-0400",
  "updated": "2008-09-26T15:16:35.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-960/",
      "key": "FLUID-960",
      "summary": "Layout Customizer Unit Test #34 fails in IE"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-14T15:07:47.000-0400",
      "body": "The unit test has been changed, test 34 has been renumbered to test 35\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-26T15:16:35.000-0400",
      "body": "Likely resolved with fix for Fluid-1603\n\nVerified using:\n\nIE7, IE6 (Win XP)\\\nIE7 (Win Vista)\n"
    }
  ]
}
---
on layout test page unit test, the reoderLayout API test module failed. NOTE: this is test 34 in the script; when running the test after test 33 completed I got a dialog box from IE saying that a script was taking a long time to run and did I want to let it continue. I clicked "yes". I suspect that interruption may have something to do with the test failing.

        