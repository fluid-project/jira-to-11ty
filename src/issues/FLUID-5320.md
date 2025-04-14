---json
{
  "title": "FLUID-5320",
  "summary": "\"getLineHeight without IE simulation\" enactor unit test fails in IE",
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
  "date": "2014-04-25T11:57:52.949-0400",
  "updated": "2014-04-29T10:36:10.955-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": "IE 8, 9, 10, 11\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-04-25T12:00:54.947-0400",
      "body": "The cause of the issues seems to be that IE reports the multiplier value as opposed to the line height in px values. In IE 10 and 11, the px value is reported when using jQuery's \"css\" method, however IE 8 and 9 still report the same value as sourced from the currentStyle property.&#x20;\n\nOne possible solution will be to combine getLineHeight and numerizeLineHeight into a single method that just gets the multiplier value directly.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-04-25T14:47:12.829-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/499>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-04-29T10:36:08.377-0400",
      "body": "Merged into the project repo @ cc8d78b3c82b968849335ee3da524fe3b2cb9cda\n"
    }
  ]
}
---
Steps to reproduce:

1\) Run the Enactor unit tests\
<http://build.fluidproject.org/infusion/src/tests/framework-tests/preferences/html/Enactors-test.html>

2\) notice that the getLineHeight tests are failing on "getLineHeight without IE simulation"

        