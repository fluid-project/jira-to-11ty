---json
{
  "title": "FLUID-5880",
  "summary": "Update the \"Localization in the Preferences Framework\" docs for changes to how message bundles are handled",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2016-03-22T11:03:05.815-0400",
  "updated": "2016-03-24T12:47:27.964-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5597/",
      "key": "FLUID-5597",
      "summary": "Message bundles shouldn't be merged, but passed directly to the requesting component."
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5599/",
      "key": "FLUID-5599",
      "summary": "Expand the message bundle system to be able to locate the bundle for a requested language"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-03-24T12:47:23.005-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion-docs/pull/85> has been merged at 856d6d40ab39fe8db59014dfbff1d66fc2c000e4\n"
    }
  ]
}
---
The [Localization in the Preferences Framework](http://docs.fluidproject.org/infusion/development/LocalizationInThePreferencesFramework.html) docs need to be updated to reflect changes from <https://fluidproject.atlassian.net/browse/FLUID-5597#icft=FLUID-5597> and FLUID-5599 around how the message bundles are handled.

        