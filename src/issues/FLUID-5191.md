---json
{
  "title": "FLUID-5191",
  "summary": "Enactors would benefit from a \"uiEnhancerConnections\" grade",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-25T10:18:25.758-0400",
  "updated": "2014-03-03T11:26:44.987-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2013-10-25T15:16:51.566-0400",
      "body": "A pull request has been issued: <https://github.com/fluid-project/infusion/pull/425>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-11-21T17:38:42.194-0500",
      "body": "Thanks for taking care of this problem, cindyli - merged into master at revision ae07cd4\n"
    }
  ]
}
---
Right now, any and every enactor must tie their applier to the uiEnhancer's applier using the sourceApplier option:\
sourceApplier: "{uiEnhancer}.applier"

This line must be duplicated in all enactor grades.

It might be better to encapsulate this in a "fluid.prefs.uiEnhancerConnections" grade, similar to the existing "fluid.prefs.prefsEditorConnections" grade.

        