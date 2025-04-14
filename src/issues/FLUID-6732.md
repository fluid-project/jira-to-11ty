---json
{
  "title": "FLUID-6732",
  "summary": "Provide a way to create a preference editor without an enhancer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2022-05-10T14:45:51.444-0400",
  "updated": "2022-05-10T14:53:28.555-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
It is currently possible to instantiate a few variants of UIO with the buildType option: prefsEditor, enhancer, and store. They sort of build on each other with store being just the store, enhancer including the enhancer and store, and prefsEditor including everything.

In UIO+ the preferences aren't applied to the preferences editor, which is also run in it's own context. It would be nice to be able to instantiate a store and prefseditor only version as the enhancer isn't used. At the moment the auxiliarySchema needs to be overwritten in the fluid.uiOpitons init by setting all of the preferences to have enactor: null.

        