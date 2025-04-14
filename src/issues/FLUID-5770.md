---json
{
  "title": "FLUID-5770",
  "summary": "Save the entire model of the prefs editor at the model change instead of only the part of \"preferences\" path",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2015-09-18T10:22:47.485-0400",
  "updated": "2017-02-27T15:49:10.707-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "2.0"
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
      "date": "2015-09-18T12:12:35.327-0400",
      "body": "Issued a pull request: <https://github.com/fluid-project/infusion/pull/637>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-09-22T12:02:21.764-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/637> ) into the project repo at 9cd0887c677fd00d28f148777a928823ec2e1416\n"
    }
  ]
}
---
<https://fluidproject.atlassian.net/browse/FLUID-5665#icft=FLUID-5665> made the change to the prefsEditor component to save preference selections into a model path "preferences" so that users can make use of the same model to save other information.

However, fluid.prefs.prefsEditor.save() function has a bug that when the prefsEditor model changes, it only saves the changed preferences in the "preferences" path and ignore other parts of the model. This prevents user's other information to be saved.

The function needs to be fixed to be able to save the entire model instead of only the "preferences" part.

        