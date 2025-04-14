---json
{
  "title": "FLUID-154",
  "summary": "Create a reusable keyboard accessibility library",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2007-12-24T16:02:51.000-0500",
  "updated": "2008-06-23T18:01:31.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-161/",
      "key": "FLUID-161",
      "summary": "Keystrokes for navigation and moving orderables should be configurable."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-161/",
      "key": "FLUID-161"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-21T14:54:48.000-0400",
      "body": "All remaining subtasks of this issue have been converted to full-fledged bugs against the Keyboard Accessibility component.\n"
    }
  ]
}
---
The Reorderer contains a number of very useful low-level keyboard accessibility features. This code should be extracted into a generally usable keyboard accessibility library, including:

* focus management&#x20;
* keyboard handlers for the arrow keys (horizontal, vertical, and 2D)
* keyboard handlers for activation (Enter, Space)

This should ultimately take the form of a jQuery plugin that we'll contribute back to the jQuery community.

        