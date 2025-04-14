---json
{
  "title": "FLUID-3446",
  "summary": "infusion builder download button is not disabled when no items selected",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Laurel Williams",
  "date": "2009-12-17T13:54:48.000-0500",
  "updated": "2010-12-17T13:13:50.035-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "FF3.5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-12-17T14:32:10.000-0500",
      "body": "The download button still seems to be functional in this state, and will download the last checked items.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-17T13:13:50.026-0500",
      "body": "Does not appear to happen any longer. Tested with FF3.6, Win7, WinXP, and Mac OSX. (tested by Heidi and Jonathan).\n"
    }
  ]
}
---
Procedure:

* load the infusion builder page and check something
* reload the page
* the checkboxes uncheck but the download button remains enabled.

        