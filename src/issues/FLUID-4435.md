---json
{
  "title": "FLUID-4435",
  "summary": "Test support file inappropriately named",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2011-09-07T17:00:13.026-0400",
  "updated": "2011-10-14T16:09:51.537-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-14T15:59:06.630-0400",
      "body": "This file has been renamed for the 1.4 release.\n"
    }
  ]
}
---
One of the UI Options test files seems inappropriately named:\
FatPanelUIOptionsFrame-test.html

The "\*-test.html" naming convention is used for actual test files that are to be opened in a browser to run tests. This particular file is the frame contents used by the fat panel test page, and isn't intended to be opened directly to run tests, so it should probably be renamed.

        