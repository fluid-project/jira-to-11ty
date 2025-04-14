---json
{
  "title": "FLOE-278",
  "summary": "Unit tests fail in firefox and IE",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Cindy Li",
  "date": "2015-02-17T10:30:44.715-0500",
  "updated": "2015-11-12T14:46:46.039-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": "The latest version of firefox and IE\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:46:46.037-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1368> and all activities should be carried on there.\n"
    }
  ]
}
---
These tests fail in firefox and IE:

tests/html/firstDiscoveryEditor-Tests.html\
tests/html/selfVoicing-Tests.html

with javascript error: ReferenceError: speechSynthesis is not defined

This is because firefox and IE don't support web speech API yet.

        