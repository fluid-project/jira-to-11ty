---json
{
  "title": "FLUID-4212",
  "summary": "Dead Man's Blur dismisses undesirably on Chrome when interaction is on browser-generated scrollbar in excluded area",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Antranig Basman",
  "date": "2011-05-09T19:14:08.184-0400",
  "updated": "2014-06-25T16:16:10.912-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4211/",
      "key": "FLUID-4211",
      "summary": "Dead Man's Blur fails when user tries to scroll using side scroller even though the rigion is excluded (Chrome, Safari)."
    }
  ],
  "attachments": [],
  "comments": []
}
---
Due to an implementation fault in the Chrome browser, interaction with a browser-generated scrollbar hosted in the "excluded area" configured for fluid.deadMansBlur will give rise to a "blur" event as the previous control loses focus, but does not produce a corresponding "focus" or even "click" event in order for the blur to be cancelled. The issue was originally reported in the use of the "Autocomplete" popup within CollectionSpace:

\[12:31] \<yura\_> ok so if you remember out autocomplete can be scrollable if there are a lot of matches\
\[12:31] \<yura\_> you can scroll with the mouse wheel, also move with keyboard down the list\
\[12:32] \<yura\_> you can/should also be able to use the side scroll bar and mouse to move up/down the list

The upstream Chromium bugs are discussed at&#x20;

<https://code.google.com/p/chromium/issues/detail?id=6759> "Clicking scrollbar in renderer should not change focus" and\
<http://code.google.com/p/chromium/issues/detail?id=14204> "Scrollbar triggers onmousedown, but fails to trigger onmouseup."

I have commented on the latter issue requesting a consistent resolution. That report provides clue to a workaround - the "mousedown" event is the ONLY one which can be detected in this condition and will be added to FluidView.js as a Chrome-specific workaround.

        