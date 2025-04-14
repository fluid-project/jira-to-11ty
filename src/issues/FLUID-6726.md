---json
{
  "title": "FLUID-6726",
  "summary": "builder tests fail when run with infusion-all.js package",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2022-03-17T15:13:06.144-0400",
  "updated": "2022-03-17T15:13:06.144-0400",
  "versions": [
    "4.0"
  ],
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
fluid.tests.prefs.builder grade in the BuildTests.js is not expecting to be using a separated panel prefs editor. However, it does not override the loaderGrades option supplied by default from the fluid.prefs.auxbuilder.\
 \
The result is that when the tests are run with an infusion-all.js distribution it fails because it's trying to instantiate the separated panel with out the required iframe. With the error:\
 \
"No container element was found for selector .flc-prefsEditor-iframe with selector name iframe in context undefined"\
 \
This is actually silently being ignored in the standard test runs because the SeparatedPanelPresfEditor.js file isn't included and the default grade name doesn't resolve to anything.

        