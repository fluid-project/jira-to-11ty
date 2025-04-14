---json
{
  "title": "FLUID-5483",
  "summary": "Full-page Prefs Editor demo doesn't load properly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Anastasia Cheetham",
  "date": "2014-07-30T15:54:27.594-0400",
  "updated": "2015-06-26T10:12:53.559-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-16T13:06:03.078-0400",
      "body": "The manual test loads properly.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:24.435-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The full-page prefs editor manual test page at\
<http://build.fluidproject.org/infusion/tests/manual-tests/framework/preferences/fullPage/>\
fails to find the JS file, probably because of the folder restructuring.

        