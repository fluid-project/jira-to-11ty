---json
{
  "title": "FLUID-4266",
  "summary": "Refactor UIOptions to be an orchestrating component ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2011-05-26T11:26:47.555-0400",
  "updated": "2013-09-06T12:59:48.674-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4531/",
      "key": "FLUID-4531"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-09-06T12:59:48.671-0400",
      "body": "UIOptions has undergone major changes to have it structured around a notion of a preferences framework.\n"
    }
  ]
}
---
Currently UIOptions both contains all the dialog functionality as well as has several subcomponents. This can be factored better as Antranig points out in the following code review comment:

I would actually refactor this area quite significantly - uiOptions.preview should not be a subcomponent of uiOptions but actually a container/sibling of it. **OR** the thing currently called uiOptions should actually be renamed uiOptionsDialog - and this is the thing which has the link JUST to settingsStore and nothing else. Then the name "uiOptions" can be used for the "orchestrating component" which contains a preview, a uiOptionsDialog, a settingsStore and a uiEnhancer as direct children. Almost all the members which are currently on uiOptions (basically all the "controls") would go onto uiOptionsDialog.

        