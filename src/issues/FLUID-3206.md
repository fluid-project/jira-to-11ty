---json
{
  "title": "FLUID-3206",
  "summary": "Keyboard-a11y API documentation incorrectly describes how to register additional key bindings.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2009-09-24T10:03:35.000-0400",
  "updated": "2010-03-30T13:53:09.000-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2"
  ],
  "fixVersions": [
    "1.1.2"
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
      "date": "2010-03-30T13:53:09.000-0400",
      "body": "This was fixed for 1.1.2 in the wiki documentation.\n"
    }
  ]
}
---
Our keyboard-a11y API documentation incorrectly describes how to register additional key bindings using the plugin. In particular, there's no description of the various fields of a key binding object, and the default value listed in the table is incorrect.

<http://wiki.fluidproject.org/display/fluid/Keyboard+Accessibility+Plugin+API>

Let's get this fixed up after Bug Parade for the 1.1.2 release.

        