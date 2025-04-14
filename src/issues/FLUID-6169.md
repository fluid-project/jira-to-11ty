---json
{
  "title": "FLUID-6169",
  "summary": "fluid.prefs.tempStore acts as a fluid.prefs.cookieStore by default",
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
  "date": "2017-07-10T14:51:05.689-0400",
  "updated": "2017-07-11T10:36:25.785-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-07-11T10:36:21.949-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/833) has been merged into the project repo master branch at 7ffeb42e5d812f4d65d9a67bd833623fdb9f731f\n"
    }
  ]
}
---
Both fluid.prefs.tempStore and fluid.prefs.cookieStore take in fluid.prefs.store as a base grade. fluid.prefs.store is also the generic grade used by the fluid.prefs.globalSettingsStore, with contextawareness employed to determine which type of actual store to use. However, the defaultGradeNames: "fluid.prefs.cookieStore" is set in fluid.prefs.store. That means when fluid.prefs.tempStore is used, it will automatically convert to a cookieStore, unless a context is provided. 

fluid.prefs.cookieStore, fluid.prefs.tempStore, and fluid.prefs.store should all use the same basegrade, with the contextawareness only part of fluid.prefs.store.

        