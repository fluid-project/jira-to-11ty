---json
{
  "title": "FLUID-762",
  "summary": "'focus' style not being properly applied to Inline Edit after edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2008-06-10T17:35:37.000-0400",
  "updated": "2008-06-23T17:33:27.000-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-16T16:29:22.000-0400",
      "body": "Switched to using addClass and removeClass instead of toggleClass.&#x20;\n"
    }
  ]
}
---
After an edit is complete (i.e. enter key is pressed, and editor switches from edit mode back to display mode), focus is (correctly) still on the display text, but the 'focus' style is not being properly applied - probably because it is being toggled instead of set/unset?

To reproduce:

<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/InlineEdit.html>

* Enter edit mode on a field (doesn't matter if you actually change the text)
* Press Enter to exit edit mode\
  &#x20; \--> focus is on the display field, but it doesn't have the focus style
* Press Enter again to enter edit mode
* Press Enter to exit edit mode again\
  &#x20; \--> focus is on the display, but this time it **does** have the focus style
* Repeatedly press Enter to switch in and out of edit mode over and over\
  &#x20; \--> the focus style is only applied on alternating occurrences

dev-iteration36

        