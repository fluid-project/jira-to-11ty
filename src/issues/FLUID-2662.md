---json
{
  "title": "FLUID-2662",
  "summary": "In the keyboard-a11y plugin, onLeaveContainer and onUnselect are not called when the user moves focus outside the container of selectables.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-05-11T17:18:48.000-0400",
  "updated": "2011-02-28T16:45:16.682-0500",
  "versions": [
    "0.7",
    "0.8",
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-05-11T17:57:52.000-0400",
      "body": "I fixed this issue in r7159.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:16.680-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
There's a bug in the keyboard-a11y plugin where neither the onLeaveContainer and onUnselect callbacks are invoked when the user blurs out of the container of selectable elements. Here's the buggy code, starting on line 265 of keyboard-a11y.js:

var cleanUpWhenLeavingContainer = function(selectionContext) {\
if (selectionContext.onLeaveContainer) {\
selectionContext.onLeaveContainer(\
selectionContext.selectables\[selectionContext.activeItemIndex]);\
} else if (selectionContext.onUnselect) {\
selectionContext.onUnselect(\
selectionContext.selectables\[selectionContext.activeItemIndex]);\
}

The reason for this issue is that user-specified callbacks are actually located in the "options" property of the selection context. The code should look like this:

if (selectionContext.options.onLeaveContainer) {\
selectionContext.options.onLeaveContainer(\
selectionContext.selectables\[selectionContext.activeItemIndex]);\
} else if (selectionContext.options.onUnselect) {\
selectionContext.options.onUnselect(\
selectionContext.selectables\[selectionContext.activeItemIndex]);\
}

I'll write a test to show this issue and then fix.

        