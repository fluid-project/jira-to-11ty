---json
{
  "title": "FLUID-1587",
  "summary": "Unit test highlighting results: using Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Joseph Vernuccio",
  "date": "2008-09-18T14:47:48.000-0400",
  "updated": "2011-01-30T12:13:57.346-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2"
  ],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": "Safari 3.2 on Mac OS X 10.5&#x20;\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1587/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-18T14:49:01.000-0400",
      "body": "screenshot - 1, results of running unit test and example of grey shadow box highlighting.&#x20;\n"
    },
    {
      "author": "y z",
      "date": "2010-04-15T16:40:25.000-0400",
      "body": "Fixed since we are now using new CSS for qUnit\n"
    }
  ]
}
---
After run of unit test, end results are highlighted by grey box.&#x20;

<http://build.fluidproject.org/infusion/tests/component-tests/reorderer/html/GeometricManager-test.html>

        