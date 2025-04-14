---json
{
  "title": "FLUID-6673",
  "summary": "Invitation text for inline edit has a low contrast ratio",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-19T14:19:35.890-0400",
  "updated": "2021-07-19T14:23:04.190-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6673/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-07-19T14:23:04.190-0400",
      "body": "screenshot.png shows the \"Edit this\" invitation text with low contrast.\n"
    }
  ]
}
---
In the inline edit demo, the first inline edit field is empty and provides "invitation"/"placeholder" text instead. However, the contrast ratio for this text is low, 2.65:1 which is well below the AA requires 4.5:1, and also below the 3:1 ratio allowed for large text.

 

see: <https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast>

        