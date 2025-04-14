---json
{
  "title": "FLUID-5445",
  "summary": "Separated panel breaks on quickly continuous hits on hide and show buttons",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Cindy Li",
  "date": "2014-06-13T15:00:05.854-0400",
  "updated": "2016-07-08T11:24:06.827-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5445/overlapping.jpeg",
      "filename": "overlapping.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-13T15:24:34.386-0400",
      "body": "Talked about it in the channel today ( <https://botbot.me/freenode/fluid-work/2014-06-13/?tz=America/Toronto> ) it didn't seem like it would be encountered in typical use of the component, so we decided to work on it after the 1.5 release.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-08T11:24:06.825-0400",
      "body": "I tested this today and wasn't able to reproduce it. Perhaps it has been fixed with some of the other work on the framework.\n"
    }
  ]
}
---
1\. Open up a separated panel demo such as <http://build.fluidproject.org/infusion/demos/prefsFramework/>

2\. Click "show display preferences" to open the prefs editor;

3\. Quickly click on "hide" then "show" (easier to do by using keyboard). The iframe opens but the main page content overlaps the content of the iframe.

If you wait a sufficient amount of time between clicking "hide" and "show", the issue doesn't appear.&#x20;

        