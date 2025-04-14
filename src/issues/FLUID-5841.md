---json
{
  "title": "FLUID-5841",
  "summary": "fluid.prefs.create does not directly accept configuration for prefsEditorLoader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2016-01-14T15:03:13.766-0500",
  "updated": "2022-02-03T10:33:17.867-0500",
  "versions": [
    "1.9",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5817/",
      "key": "FLUID-5817",
      "summary": "Refactor fluid.prefs.create so that it takes the form of a grade"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-22T15:08:38.220-0400",
      "body": "The Preferences Framework has been update significantly for <https://fluidproject.atlassian.net/browse/FLUID-6420#icft=FLUID-6420>, included in <https://github.com/fluid-project/infusion/pull/1052> When the PR is merged, we should verify that it addresses this issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-02-03T10:33:17.859-0500",
      "body": "fluid.prefs.create no longer exists. fluid.uiOptions and the fluid.prefs.assembler.prefsEd provide a top level option for configuring the prefsEditorLoader.\n"
    }
  ]
}
---
fluid.prefs.create takes in configuration for the builder and prefsEditor. If you want to make configuration changes to the prefsEditorLoader you have to supply a loaderGrade to the auxiliary schema. This make things more complicated if you are using a different auxSchema as a base grade as you have to know what loaderGrades it is already supplying. loaderGrades is an array which will replace rather than merge when merging auxSchemas.&#x20;

        