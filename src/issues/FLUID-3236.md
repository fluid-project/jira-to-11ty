---json
{
  "title": "FLUID-3236",
  "summary": "Link and counter on Unit Testing page is broken",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2009-10-06T15:34:09.000-0400",
  "updated": "2015-06-26T10:17:37.175-0400",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2010-03-26T12:04:50.000-0400",
      "body": "I see what you mean.\\\nThe setup is expecting another test (for testing component specific CSS) and it doesnt exist.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:26.596-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:28.941-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
<http://build.fluidproject.org/unit-tests.html> - Link to next test is broken. Jacob noted that this is the last test, but it says test 7 of 11.

        