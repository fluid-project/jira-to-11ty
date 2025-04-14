---json
{
  "title": "FLUID-5366",
  "summary": "UIOptions component will not work unless relative path to framework is as defined by schemas",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Not A Bug",
  "reporter": "Anastasia Cheetham",
  "date": "2014-05-08T09:48:27.224-0400",
  "updated": "2014-05-13T15:44:07.790-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-05-13T15:44:07.788-0400",
      "body": "It turns out that options to the component can override the default paths:\n\nfluid.uiOptions.prefsEditor(\".flc-prefsEditor-separatedPanel\", {\\\ntemplatePrefix: \"../../../framework/preferences/html/\",\\\nmessagePrefix: \"../../../framework/preferences/messages/\"\\\n});\n"
    }
  ]
}
---
NOTE: This issue relates to the UI Options component itself, not to any of the functions provided by the Prefs Framework.

The UI Options component is built upon the starter schemas, which hard-code a relative path to the templates, message files, etc. If an integrator tries to use the UIO component in a place that doesn't have the exactly-matching relative path, it won't work at all.

To reproduce:

1\) In the demos/uiOptions folder, create a 'test' subfolder.\
2\) Copy the demos/uiOptions/index.html into the 'test' subfolder.\
3\) Edit demos/uiOptions/test/index.html head so that all the paths to JS files, CSS files, etc. reflect the new relative path.\
4\) Open demos/uiOptions/test/index.html in a browser.

The UIOptions component doesn't work.

Since the component file uses the prefs framework to build the grade that the integrator instantiates, there's no opportunity for the integrator to specify alternative paths. They have to revert to using the Prefs Framework's create function instead of the component. This isn't a difficult thing, but it leads one to question why we have the component.

One solution would be for the UIO component file to only build the component upon integrator instantiation, incorporating integrator-provided paths in the process.

        