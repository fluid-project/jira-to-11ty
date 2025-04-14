---json
{
  "title": "ENGAGE-190",
  "summary": "War file places infusion in a directory called infusion instead of fluid-infusion",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2009-11-10T17:16:54.000-0500",
  "updated": "2014-03-03T14:20:45.988-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-12T14:47:48.000-0500",
      "body": "updated build scripts. The directories it created in the war still had the old names. These have now been updated.\\\nengage-core -> fluid-engage-core\\\ninfusion -> fluid-infusion\n"
    }
  ]
}
---
War file places infusion in a directory called infusion instead of fluid-infusion

This is problematic for keeping our paths consistent within engage and kettle, as the external director is called fluid-infusion

        