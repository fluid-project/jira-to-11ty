---json
{
  "title": "FLUID-4046",
  "summary": "Convert progress manual test to automated test",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Golam Chowdhury",
  "date": "2011-02-01T10:46:57.608-0500",
  "updated": "2015-06-09T10:30:16.657-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Progress"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5073/",
      "key": "FLUID-5073",
      "summary": "the hide and show functions for the manual progress demos are throwing errors"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T10:30:16.656-0400",
      "body": "This should have been addressed with the demo reorganization\n"
    }
  ]
}
---
Convert the following progress manual tests into automated  tests:

1\) Progress Controls for Testing.\
2\) Floating Progress, animates forward only, delays on hide.\
3\) Progress in a float, animates forward only.\
4\) Progress Always Showing, #1, animates both direction, #2 doesn't animate at all.

        