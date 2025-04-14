---json
{
  "title": "FLUID-1053",
  "summary": "Unit tests display incorrect information at the bottom of test.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-07-29T10:51:50.000-0400",
  "updated": "2009-02-04T08:39:32.000-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-04T08:39:32.000-0500",
      "body": "Fixed at r6409 as part of <https://fluidproject.atlassian.net/browse/FLUID-2185#icft=FLUID-2185> (update of qunit)\n\nTested using:\\\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n"
    }
  ]
}
---
Unit tests say.

"Tests completed in 0 milliseconds.\
0 tests of 0 failed."

This is displayed in all cases, even when tests fail.

It may be that this information isn't being updated as the tests are run, or is being updated before the tests are run.

        