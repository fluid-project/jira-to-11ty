---json
{
  "title": "FLUID-5965",
  "summary": "Native HTML 5 sliders look terrible when zoomed on Chrome",
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
  "date": "2016-09-21T13:08:30.791-0400",
  "updated": "2017-01-26T09:00:35.778-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework",
    "Textfield Slider"
  ],
  "environment": "Chrome 53.0.2785.116 m (64-bit) on Windows 7 64-bit\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5964/",
      "key": "FLUID-5964"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5965/uio-html5-thumb.png",
      "filename": "uio-html5-thumb.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-14T12:36:03.396-0500",
      "body": "Antranig Basman could you please confirm if this is still an issue. There were some substantial styling changes in <https://fluidproject.atlassian.net/browse/FLUID-6017#icft=FLUID-6017>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-01-26T09:00:35.758-0500",
      "body": "There were changes to the native html5 sliders in the lead up to the Infusion 2.0 release. It is likely that those styling changes may have fixed this issue.\n"
    }
  ]
}
---
The native HTML 5 sliders, which we used to replace the jQuery UI sliders, render very poorly on Chrome when zoomed. It appears that they have a little thumb mark holding 3 horizontal lines which sometimes disappears completely, or sometimes renders the lines unequally. See attached screenshot which is at 125% in Chrome. This also displays <https://fluidproject.atlassian.net/browse/FLUID-5964#icft=FLUID-5964> as well as vertical misalignment between the sliders and the textfields which are associated with them.

        