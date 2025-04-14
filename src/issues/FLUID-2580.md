---json
{
  "title": "FLUID-2580",
  "summary": "selectbox isn't included in the build",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-04-09T17:37:21.000-0400",
  "updated": "2009-04-09T17:50:39.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-09T17:47:21.000-0400",
      "body": "moved the selectobox plugin into the lib folder in manual-tests\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-04-09T17:50:39.000-0400",
      "body": "Justin's fix works\n"
    }
  ]
}
---
selectbox isn't included in the build

This means that the dropdown inline edit example appears as just a normal combo box, instead of a dropdown inline edit.

        