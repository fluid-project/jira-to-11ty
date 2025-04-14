---json
{
  "title": "FLUID-6492",
  "summary": "Re-implement keyboard-a11y plugin to use \"key\" or \"code\" instead of \"keyCode\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2020-04-16T10:10:48.258-0400",
  "updated": "2021-07-29T01:53:56.915-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The keyCode, charCode, and which properties of the keyboard event are deprecated. We should be using "key" or "code" instead. The values for "key" and "code" are human readable and allow for removing the use of jQuery UI's $.ui.keyCode.\<key name> constants.

See: <https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent>

        