---json
{
  "title": "FLUID-89",
  "summary": "Key strokes for navigation and drag-and-drop conflict with browser/OS/AT defined keystrokes.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-11-02T17:37:25.000-0400",
  "updated": "2008-03-19T15:53:57.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-161/",
      "key": "FLUID-161"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-259/",
      "key": "FLUID-259"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-01-07T16:42:35.000-0500",
      "body": "With Spaces turned on in Mac OS X 10.5, the Ctrl-Arrow keys have been mapped to space switching, rendering the Reorderer inoperable.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2008-01-31T11:09:35.000-0500",
      "body": "There is a preference in FireFox that overrides the navigation keystrokes defined in the Reorderer.  Open FF's preferences, and choose \"Advanced\".  Within \"Advanced\" choose the \"General\" tab.  The \"General\" preferences contain an \"Accessibility\" section.  That section has a checkbox labelled \"Always use the cursor keys to navigate within pages\".  If this is checked, navigation using arrow keys behaves strangely and only works partially in the context of a Reorderer.\n\nFireFox 2.0.0.11 (Mac OS 10.5.1).\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-19T15:53:57.000-0400",
      "body": "Key stroke sets are now configurable. The generic-lightbox example uses a screen reader friendly key set.\n"
    }
  ]
}
---
I confess that I've found this issue only with Camino ([http://caminobrowser.org](http://caminobrowser.org/)).  It allows for tabbed browsing.  The keystroke for moving among the tabs is cmd-opt-leftArrow and cmd-opt-rightArrow.  These are grabbed and used by the browser before the page's key press handling has a crack at them.  As such, keyboard navigation in, for example, the lightbox doesn't work.  Ditto for keyboard drag-and-drop.

Safari (2.0.3) uses cmd-curlyBrace to move between adjacent tabs; thus, it does not conflict with the keystrokes defined by the Reorderer.

Although confined to Camino in this case, it does suggest a general issue where fluid's keystrokes must be chosen carefully since they may be ursurped by the browser, the OS, or, even an AT.

        