---json
{
  "title": "FLUID-5312",
  "summary": "Simple Inline Editor demo textfield hover tooltip is inaccurate, appears in duplicate, and blocks the text entry field",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Dana",
  "date": "2014-04-17T17:42:30.712-0400",
  "updated": "2014-04-30T16:13:49.685-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "Firefox and Safari, OS 10.9.2\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5347/",
      "key": "FLUID-5347"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5348/",
      "key": "FLUID-5348"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5312/Screen Shot 2014-04-17 at 4.46.16 PM.png",
      "filename": "Screen Shot 2014-04-17 at 4.46.16 PM.png"
    }
  ],
  "comments": []
}
---
When hovering over the image caption text-entry field, a tooltip appears, which states "Select or press Enter to edit".  Selecting Enter does nothing.  If the cursor remains hovered over the text field a duplicate tooltip appears, blocking the text entry field. &#x20;

(One) tooltip only should state "Select text field to edit" and should not block the text-entry field. &#x20;

        