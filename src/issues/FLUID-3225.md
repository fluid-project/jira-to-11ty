---json
{
  "title": "FLUID-3225",
  "summary": "Keyboard a11y plugin fires onUnselect event twice - once by onSelect and again by onBlur",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jacob Farber",
  "date": "2009-10-05T13:59:42.000-0400",
  "updated": "2017-03-10T08:57:36.159-0500",
  "versions": [
    "1.1.2",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-12T13:04:16.050-0500",
      "body": "The code has changed significantly since this was filed, so the line numbers are no longer relevant, but now it seems that the unselect handler is being called twice when the mouse is used: through the selectableBlurHandler and through selectElement(), and it's being called three times when navigation occurs through the keyboard: through the selectableBlurHandler, through selectElement() and through prepareShift().\n"
    }
  ]
}
---
If you use the unSelect event it will be called twice (line 320 and line 337) when it should probably only be called by the blur event

        