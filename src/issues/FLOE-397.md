---json
{
  "title": "FLOE-397",
  "summary": "On focusing the FD language list, start at the topmost visible language",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Simon Bates",
  "date": "2015-06-09T10:08:21.377-0400",
  "updated": "2015-11-12T14:36:03.668-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-333/",
      "key": "FLOE-333",
      "summary": "Scrolling through languages causes page to reload too often"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:36:03.665-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1467> and all activities should be carried on there.\n"
    }
  ]
}
---
For FLOE-333, we identified the following:

"When focus is moved to the language list, the list of visible languages is not changed and the language at the top of the list is given focus"

In the current implementation, we have the following:

1\. On first focusing the list, we start at the top language (not the top visible, but the very first one), scrolling if needed\
2\. If focus leaves the language list by tabbing and we then refocus the list, we go back to the top of the list (as in 1 above)\
3\. If focus leaves the language list by clicking the mouse button outside of the list and we then refocus the list, the last selection is remembered

For the keyboard navigation of the language list we are using the Fluid "selectable" jQuery plugin:

<https://github.com/fluid-project/first-discovery/blob/7f69951489d66107ed1cc8e9e3aac4c0d88197e3/src/js/panels.js#L793-L806>

The reason for the inconsistency between situation 2 and 3 above is that we are setting "rememberSelectionState: false" but the selectable plugin only unsets the selected element on press of tab. See <https://github.com/fluid-project/infusion/blob/df508ecc39d203bceff3f59aec6772d1a706d3c3/src/framework/core/js/jquery.keyboard-a11y.js#L357-L369>

To implement the desired behaviour, we would need to put in place a mechanism that sets the selected element to the top visible language either on focusing the list, or on scrolling the list.

        