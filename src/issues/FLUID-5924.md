---json
{
  "title": "FLUID-5924",
  "summary": "HTML5 native sliders don't show updated values in firefox",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Cindy Li",
  "date": "2016-07-05T11:15:36.808-0400",
  "updated": "2016-07-06T09:40:23.749-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Firefox (issue produced in firefox 47.0)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5924/html5 slider issue.jpeg",
      "filename": "html5 slider issue.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-07-06T09:40:08.206-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/725> has been merged into the infusion master branch at 3f148ee5baa5ba2f36195a390d2c2afd52c9e232.\n"
    }
  ]
}
---
Steps to produce:

1\. Using firefox to open a preference framework demo: <http://build.fluidproject.org/infusion/demos/prefsFramework/>\
2\. Click "show display preferences" to open the preferences panel;\
3\. Move a native slider to a value in btw such as 1.4;\
4\. Click hide to close the UIO panel;\
5\. Then click show to open the panel.

Note that the slider handlebar is not at 1.4 position, it's either at the start or at the end of the slider.

Also, there's a linting error with infusion, please take the chance to fix it if possible.

        