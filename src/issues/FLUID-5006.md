---json
{
  "title": "FLUID-5006",
  "summary": "Update the font size of checkbox labels for UIO based on design spec",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Kaye Mao",
  "reporter": "Justin Obara",
  "date": "2013-04-30T16:27:19.493-0400",
  "updated": "2015-06-26T10:01:11.727-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5686/",
      "key": "FLUID-5686"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:55.648-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The font size used for the checkboxes in the UIO panels is too small. They should be a size corresponding to 14pt ( <http://wiki.fluidproject.org/display/fluid/%28Floe%29+UI+Options+Design+High+Fidelity%2C+C.1#Style> ). I had attempted to change these with the FLUID-5002 fix, but it seems that in doing so the size of the ToC toggle increases and the panel for the "Links & Buttons" settings expands to accomodate the text. These should be kept consistent with the current sizes if possible.

        