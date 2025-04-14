---json
{
  "title": "FLUID-1920",
  "summary": "Applying preferences to UI Options causes the preview window to move below the settings section",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2008-12-04T10:02:39.000-0500",
  "updated": "2011-02-22T16:27:44.941-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:44.939-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
This is due to the heavy handed removeStyling function that removes all classes in the 'fl-' name-space.&#x20;

        