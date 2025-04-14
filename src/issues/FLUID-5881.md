---json
{
  "title": "FLUID-5881",
  "summary": "Double slashes in URLs for loading prefs framework templates should be single slashes instead",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2016-03-31T11:11:51.285-0400",
  "updated": "2016-03-31T11:11:51.285-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
To re-produce, \
1\. Open a browser, turn on debugger or developer tool, go to "console" tab;\
2\. Open any of these tests in this browser:\
<http://build.fluidproject.org/infusion/tests/framework-tests/preferences/html/FullPreviewPrefsEditor-test.html>\
<http://build.fluidproject.org/infusion/tests/framework-tests/preferences/html/FullNoPreviewPrefsEditor-test.html>\
<http://build.fluidproject.org/infusion/tests/framework-tests/preferences/html/SeparatedPanelPrefsEditor-test.html>\
3\. Check GET requests in the console for fetching preferences framework templates and message bundles, those URLs are:

<http://build.fluidproject.org/infusion/src/framework/preferences/html//PrefsEditorTemplate-linksControls.html?_=1459436773451>\
<http://build.fluidproject.org/infusion/src/framework/preferences/messages//contrast.json?_=1459436773458>

Note the double slashes (//) before the .html and .json file names. They should be single slashs :check\_mark:.

        