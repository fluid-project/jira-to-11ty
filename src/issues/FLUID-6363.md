---json
{
  "title": "FLUID-6363",
  "summary": "Re-visit the removal of the localization preference from the prefsFramework demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Cindy Li",
  "date": "2019-01-23T16:08:19.552-0500",
  "updated": "2024-07-22T10:35:18.414-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6303/",
      "key": "FLUID-6303",
      "summary": "Implement a panel, adjuster and enactor for locale"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6303/",
      "key": "FLUID-6303"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-07-12T09:34:55.280-0400",
      "body": "Yes, until the prefs framework contains localizable content, it makes sense to not include the panel in that specific demo. There is a prefs framework [example](https://build.fluidproject.org/infusion/examples/framework/preferences/localizationPreference/urlPath/) for localization that can be used to demonstrate the feature.\n"
    }
  ]
}
---
In order to address [the last code review comment](https://github.com/fluid-project/infusion/pull/949#discussion_r249489976) on [the pull request for FLUID-6303](https://github.com/fluid-project/infusion/pull/949), [this change](https://github.com/fluid-project/infusion/pull/951/commits/99085ab7d2fda8b73379084641b6f3d9f84c3b0b) was made to remove the localization preference/panel from the prefsFramework demo.

It would be helpful to have @@Justin Obara revisit this change to make sure it makes sense.

        