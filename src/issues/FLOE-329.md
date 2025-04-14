---json
{
  "title": "FLOE-329",
  "summary": "Keyboard usability issue with page reload at each language change",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Cindy Li",
  "date": "2015-05-11T12:17:08.445-0400",
  "updated": "2015-11-12T14:43:40.144-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-05-11T12:26:50.198-0400",
      "body": "There's a number of possible approaches to this. One approach involves staying with our current implementation, and persisting the focus state in the component's model, together with any other navigational UI state that we will probably need to persist too. If we go with this, it might be easier to have merged in the framework updates associated with FLUID-5249, which will make it easier to identify components and DOM elements in a stable way. Another approach would involve a more \"light\" model of reinstantiation - we could keep the current page but destroy and then recreate the component tree - this would most likely run into the same kind of focus issues.\n\nFinally we can consider approaches based on a different model of locating message bundles. At the cost of a huge amount of failed I/O at startup, we could eagerly try to load every message bundle for every panel in every locale - and then keep this in a \"mega-model\" from which we could fetch just the required elements. This would require changes in both the framework and the preferences framework. It would seem best if we started to go with this approach that we should start to consider some kind of build-time step which would \"compile\" all the messages bundles (and perhaps various other resource files required by a prefs editor) into a single resource file.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:43:40.142-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1405> and all activities should be carried on there.\n"
    }
  ]
}
---
Each language change on the language panel causes the page to reload. After the page reload, the focus disappears on the panel. It should remain at wherever it was before the page reload.

        