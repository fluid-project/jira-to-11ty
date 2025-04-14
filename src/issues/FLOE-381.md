---json
{
  "title": "FLOE-381",
  "summary": "In voting demo, the styling of the icon arrow for high contrast needs to be adjusted for tablets",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Cindy Li",
  "date": "2015-06-05T11:25:51.221-0400",
  "updated": "2015-11-12T14:40:49.209-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": "Only occurs with tablets: iOS and android tablets. Tested with IPad & Nexus 7\n\nWorks fine with desktop (tested with Mac)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-381/IPad-high contrast.jpeg",
      "filename": "IPad-high contrast.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:40:49.207-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1452> and all activities should be carried on there.\n"
    }
  ]
}
---
Open the voting demo - <http://localhost/first-discovery/demos/voting/index.html>

1\. Use iOS or android tablets;\
2\. Navigate to the contrast panel and switch to "black on white" or "white on black"\
3\. With iOS, the icon arrow for the currently selected panel overlaps a bit over the icon. With android tablets, a thin line shows up at the left of the icon arrow.

        