---json
{
  "title": "FLUID-5263",
  "summary": "Prefs Framework should support addition of panels by other apps, without having to modify prefsEditor instantiation directly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Anastasia Cheetham",
  "date": "2014-01-30T14:07:06.820-0500",
  "updated": "2021-07-29T01:35:59.642-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Right now, the only way to specify the panels that should be present in a prefsEditor is to specify them through the schemas or grades that are used directly to build/instantiate the prefsEditor.

I can envision a use case of two CMS plugins (say, plugins for WordPress, or Drupal, or Joomla):\
1\) a PrefsEditor plugin that adds the starter-panels-version of a prefsEditor to the site, and\
2\) a plugin for X (say, the VideoPlayer), which would like to add some panels to the prefsEditor

The only way the X plugin could add panels to the PrefsEditor is to use old-fashioned, deprecated demands blocks.

Obviously, we're trying to get rid of the use of demands blocks. It would be nice if there were some other way for the X plugin to "register" its preferences panels somehow, so that the PrefsEditor construction process would find them and add them, without directly knowing anything about them.

        