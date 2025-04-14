---json
{
  "title": "FLUID-5166",
  "summary": "UIOptions Builder-test.html fails in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Cindy Li",
  "date": "2013-10-02T11:23:02.897-0400",
  "updated": "2014-04-30T12:00:14.266-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "The test only fails in IE8.&#x20;\n\nIt passes successfully in the latest firefox, chrome, safari.\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5323/",
      "key": "FLUID-5323"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-04-02T16:16:57.698-0400",
      "body": "This error is still happening.&#x20;\n"
    }
  ]
}
---
1\. Open this url in IE8: <http://build.fluidproject.org/infusion/tests/component-tests/uiOptions/html/Builder-test.html>\
2\. The last test fails with error: Died on test #1 undefined: Object expected

        