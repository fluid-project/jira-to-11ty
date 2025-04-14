---json
{
  "title": "FLUID-4227",
  "summary": "Uploader Compatibility Tests fails on IE 8, 9",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Harris Wong",
  "date": "2011-05-11T13:32:19.376-0400",
  "updated": "2011-05-11T13:35:24.116-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE 8, 9 on Windows 7\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4223/",
      "key": "FLUID-4223",
      "summary": "Uploader's options backwards compatibility unit tests are failing in Internet Explorer"
    }
  ],
  "attachments": [],
  "comments": []
}
---
All uploader Compatibility tests fails on IE 8, 9.  Error message below:\
"1.Died on test #1: Object doesn't support property or method 'fail' - { "message": "Object doesn't support property or method 'fail'", "description": "Object doesn't support property or method 'fail'", "number": -2146827850, "name": "TypeError" "

Steps to reproduce:\
1\. Open up IE 8,9 and go to <http://build.fluidproject.org/infusion/tests/component-tests/uploader/html/UploaderCompatibility-test.html>.

        