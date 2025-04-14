---json
{
  "title": "FLUID-4963",
  "summary": "Keyboard focus doesn't scroll panels into view (Firefox, IE9)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Anastasia Cheetham",
  "date": "2013-04-01T11:52:57.611-0400",
  "updated": "2024-07-22T14:38:52.025-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "Firefox (Windows and Mac), IE9\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-04-01T16:19:15.778-0400",
      "body": "Cindy and I investigated solutions for this. Using the DOM 'scrollIntoView()' function works helps in Firefox (and improves the experience in Chrome), but in IE9, it scrolls the current to the far left of the fatPanel (and not just \"into view\"), which creates a very jarring, disconcerting experience.\n\nWe couldn't get the 'scrollTo' plugin to work in Firefox, In Chrome, it caused controls to scroll to the specified position even when they were clicked on using the mouse, which created disconcerting moving targets.\n\nSince the current functionality is acceptable in Chrome, we're going to leave this for now, and return to it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T14:38:51.867-0400",
      "body": "Could not reproduce with FF 128 on macOS 14.5\n"
    }
  ]
}
---
In Firefox and IE9, when the tab key is used to tab through the controls in the new panels, tabbing to panels that are 'off-screen' to the right does not properly auto-scroll those panels into view. When focus arrives on the 'emphasize links' checkboxes, those boxes scroll into view (but not their associated labels), but that's it.

Note that in Chrome and Safari, this is NOT a problem: controls scroll into view adequately.

        