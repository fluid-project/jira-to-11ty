---json
{
  "title": "FLUID-5440",
  "summary": "Prefs Framework Demo: The focus styling for \"show display preferences\", \"reset\" and \"hide\" links are invisible when using dark background themes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2014-06-12T16:05:40.537-0400",
  "updated": "2014-06-16T09:56:03.723-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos"
  ],
  "environment": "firefox 30.0 on Mac 10.9.3\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-16T09:55:54.027-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/532> ) into the project repo at bb9e5a1a54be7ce29d5c6cee37888db24aa715c7&#x20;\n"
    }
  ]
}
---
1\. Open prefs framework demo: <http://build.fluidproject.org/infusion/demos/prefsFramework/>\
2\. Set the preference "colour and contrast" to apply a theme that has black or grey background;\
3\. Use keyboard to tab onto "reset" or "hide" links. The focus styling is invisible for the black background themes and hard to see for the grey background (with a black border focus styling).

Other separated panel demos don't have this problem and this issue only occurs in firefox.

        