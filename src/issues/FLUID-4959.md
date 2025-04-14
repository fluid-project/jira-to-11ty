---json
{
  "title": "FLUID-4959",
  "summary": "Changing line spacing with UIO causes text to mis-align in the UIO panel",
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
  "date": "2013-04-01T09:30:47.190-0400",
  "updated": "2013-04-29T09:14:09.967-0400",
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
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4959/line-spacing bug.png",
      "filename": "line-spacing bug.png"
    }
  ],
  "comments": []
}
---
The CSS toggle button and the descriptions for emphasize links in UIO changes with the line spacing option. This causes these elements to lay out improperly when line spacing is used.

To reproduce:\
1\. Open the Climate Change demo: <http://build.fluidproject.org/floe-infusion-demo/integration-demos/uiOptions/ClimateChange.html>\
2\. Change the line spacing to maximum in UIO.\
3\. Close and open the UIO panel.\
4\. Notice that the positioning of the "OFF" text on the toggle button, and the description of the Emphasize Links area is slightly off.

        