---json
{
  "title": "FLUID-5384",
  "summary": "Enactors and UIEnhancer tests failing in Chrome",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2014-05-30T14:54:46.399-0400",
  "updated": "2015-11-07T21:32:14.964-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": "Chrome 35 (Mac OS 10.9.3)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5481/",
      "key": "FLUID-5481"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-06-09T15:21:36.681-0400",
      "body": "Cannot reproduce.\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/tests/framework-tests/preferences/html/UIEnhancer-test.html>\
<http://build.fluidproject.org/infusion/tests/framework-tests/preferences/html/Enactors-test.html>

Both of the above tests suites have failing tests related to the px convertion of text size.

        