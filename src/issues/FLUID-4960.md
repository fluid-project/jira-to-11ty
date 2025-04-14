---json
{
  "title": "FLUID-4960",
  "summary": "Fixed height of UIO reset and show/hide tabs causes some fonts to wrap and clip",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2013-04-01T10:59:29.854-0400",
  "updated": "2013-04-29T09:14:34.600-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4938/",
      "key": "FLUID-4938"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The fixed height of the UIO reset and show/hide tabs causes text to wrap and clip in certain situations.

To reproduce:\
1\. Launch the integration demo: <http://build.fluidproject.org/floe-infusion-demo/integration-demos/uiOptions/ClimateChange.html>\
2\. Change the font to Verdana.\
3\. Notice how the text in the tabs will clip.

        