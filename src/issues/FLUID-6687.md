---json
{
  "title": "FLUID-6687",
  "summary": "Adjusters/inputs are blue in iOS",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2021-10-20T08:41:33.977-0400",
  "updated": "2024-07-22T10:35:05.641-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "Safari iOS 15\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6687/select.PNG",
      "filename": "select.PNG"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6687/stepper.PNG",
      "filename": "stepper.PNG"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6687/switch.PNG",
      "filename": "switch.PNG"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-10-20T08:50:39.064-0400",
      "body": "Will address in the <https://fluidproject.atlassian.net/browse/FLUID-6605#icft=FLUID-6605> PR <https://github.com/fluid-project/infusion/pull/1060>\n"
    }
  ]
}
---
The adjusters using textfield steppers, select, and switches are blue in iOS. This is likely due to no default colour being set after having removed normalize.css. The default colour for the inputs in iOS is blue.

Steps to reproduce:

* Open the [UI Options demo](https://build-infusion.fluidproject.org/demos/uioptions/)
* Open the prefs editor and scroll through the available adjusters
* Notice that many of the inputs are blue

Screenshots:

* switch.PNG: shows blue colour on switch controls
* select.PNG: shows blue colour of select inputs
* stepper.PNG: shows blue colour on the buttons for the textfield steppers

        