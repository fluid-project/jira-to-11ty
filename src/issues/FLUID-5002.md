---json
{
  "title": "FLUID-5002",
  "summary": "The path to the OpenSans-light.ttf font is incorrect",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-04-29T15:35:35.878-0400",
  "updated": "2013-06-03T15:11:51.651-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-04-29T15:39:43.920-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/319>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-05-03T12:39:08.381-0400",
      "body": "Merged into project repo at f1d3fd3ff6038c3087ed7798cb2b6d91ab7a7266\n"
    }
  ]
}
---
The path to OpenSans-Light.tiff font in the FatPanelUIOptions.css and FatPanelUIOptionsFrame.css files points at "font/OpenSans-Light.ttf" but should actually be "../../../lib/font/OpenSans-Light.ttf"

        