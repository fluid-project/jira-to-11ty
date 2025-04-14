---json
{
  "title": "FLUID-2130",
  "summary": "0.7 minified distribution throws an error in the layoutReorderer unit test: using IE7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-01-15T13:58:42.000-0500",
  "updated": "2009-03-18T10:06:38.000-0400",
  "versions": [
    "0.7"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "IE 7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-18T10:06:38.000-0400",
      "body": "this was rectified in the 0.8 release\n"
    }
  ]
}
---
0.7 minified distribution throws an error in the layoutReorderer unit test

When you open the unit test page an error "invalid character" error is thrown. If you close the error message the page runs properly.

It doesn't happen in the nightly build.

        