---json
{
  "title": "FLUID-2494",
  "summary": "Selecting reorderable tab with the mouse does not enable arrow keys to be used subsequently",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Antranig Basman",
  "date": "2009-04-02T16:45:27.000-0400",
  "updated": "2009-05-05T16:02:09.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "IE6, FF2, FF3 (Win2k)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-05T16:02:08.000-0400",
      "body": "was not able to reproduce this issue.&#x20;\n"
    }
  ]
}
---
For the standalone reorderable tabs demo <http://build.fluidproject.org/infusion/standalone-demos/reorderer/html/jquery-tabs.html> , it is possible to tab to the control, and then use the arrow keys to select a tab. However, if a tab is selected with the mouse, the arrow keys do not function.

        