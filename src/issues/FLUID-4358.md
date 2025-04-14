---json
{
  "title": "FLUID-4358",
  "summary": "Fat Panel UIO should save automatically",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-07-26T16:38:18.081-0400",
  "updated": "2013-10-04T09:58:49.090-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-25T10:29:57.852-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/137> merged into project repo at 4018514d2d1fa9d235178ff8ea89d4a3c10f2466\n"
    }
  ]
}
---
The fat panel UIO should save automatically when any of the options have changed. Currently it only saves when the panel is closed.

Steps to reproduce

1\) Open the fat panel uio demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/FatPanelUIOptions/html/uiOptions.html>

2\) Open the ui options panel

3\) make some changes

4\) refresh the page\
Notice that none of the changes were saved. If you had closed the panel before the refreshed, the changes would have saved.

        