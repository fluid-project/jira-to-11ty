---json
{
  "title": "FLUID-2806",
  "summary": "uiOptions Line Spacing (slider and text field) does not update the preview in Opera 9.6 WinXP",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "y z",
  "date": "2009-05-28T11:53:42.000-0400",
  "updated": "2009-06-05T08:34:28.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "Opera 9.6 - WinXP, OS X\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2836/",
      "key": "FLUID-2836",
      "summary": "Bold setting under easier to find isn't toggling"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce a bug:

* open Sakai ui Options example: <http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html#>
* open ui options dialogue
* Try changing line spacing using either a slider or a text field
* Notice that the preview does not automatically update.

        