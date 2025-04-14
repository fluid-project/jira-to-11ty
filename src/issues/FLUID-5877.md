---json
{
  "title": "FLUID-5877",
  "summary": "Display preferences panel and content not synchronized when in contrast mode on Preferences Editor Demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "reporter": "Blagoj Dimovski",
  "date": "2016-03-15T18:57:41.612-0400",
  "updated": "2016-03-16T08:53:29.698-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-03-16T08:53:29.696-0400",
      "body": "This is actually not a bug, but a design decision. By design the panel itself does not apply the it's changes until it has been closed and reopened. This serves a couple purposes.\n\n* The main content acts as a preview to the changes. Minimizing the chance that a user could set preferences that they could no longer use the tool with\n* apply changes like text size and etc could move the controls around the screen as the user is interacting with them. By not applying the changes right away, the user has a consistent control panel to work with while adjusting preferences.\n"
    }
  ]
}
---
Display preferences panel and content not synchronized when in contrast mode on Preferences Editor Demo

1\. Open: <http://build.fluidproject.org/infusion/demos/uiOptions/>\
2\. Click on "Show display preferences" button, to open the top panel.\
3\. Change the color and contrast settings, for example, select black and yellow.\
You will notice that the panel color stays the same, while the content color scheme will get different. Now Press on "hide" button, and on "Show display preferences" button again. You will notice now that everything is in the same color. When you change color again, the panel doesn't change it's color and everything else does.&#x20;

The panel should get synchronized

        