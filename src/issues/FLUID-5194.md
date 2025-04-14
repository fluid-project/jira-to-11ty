---json
{
  "title": "FLUID-5194",
  "summary": "Clean up classnames, etc. in starter panel markup",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-28T13:59:03.749-0400",
  "updated": "2016-08-23T10:51:41.055-0400",
  "versions": [
    "1.5"
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
      "date": "2016-08-23T10:51:37.935-0400",
      "body": "The infusion pull request <https://github.com/fluid-project/infusion/pull/739> has been merged into the master branch at 815b857cc9291e3f7b58077a37af1fc85b2c6ca0\n\nThe accompanying pull request for infusion-docs <https://github.com/fluid-project/infusion-docs/pull/97> has been merged into the master branch at 34d990f309045ec0318ba4db1ac2b3e0b4f88dbf\n"
    }
  ]
}
---
I'm seeing a few selector classnames in the starter panel markup that don't seem to be used anywhere in the code. They're probably leftovers from earlier versions of the component. It would probably be a good idea to go through all the markup, etc. and clean out anything that's no longer used. There may also be style classnames that aren't needed anymore.

Example: SeparatedPanelPrefsEditor.html has a flc-prefsEditor-separatedPanel-tabs class that isn't mentioned anywhere in the code.

        