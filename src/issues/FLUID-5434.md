---json
{
  "title": "FLUID-5434",
  "summary": "Manual tests \"Performance Tests\" throws javascript error on IE8 ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Cindy Li",
  "date": "2014-06-09T11:09:30.930-0400",
  "updated": "2014-06-25T16:01:18.041-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "IE8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T16:01:18.040-0400",
      "body": "We no longer actively support IE6, IE7 and IE8. We will consider patches for certain issues.\n"
    }
  ]
}
---
Use IE8 for these tests:

1\. Performance tests - <http://build.fluidproject.org/infusion/tests/manual-tests/html/performance-test.html>\
IE8 throws: Line 56, Error: Object doesn't support this property or method

2\. Performance tests 2 - <http://build.fluidproject.org/infusion/tests/manual-tests/html/performance-test-2.html>\
IE8 throws: Line 82, Error: Object doesn't support this property or method

        