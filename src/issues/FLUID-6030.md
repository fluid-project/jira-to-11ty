---json
{
  "title": "FLUID-6030",
  "summary": "Native HTML slider thumb is cropped to track width on IE11 / Edge",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Alan Harnum",
  "date": "2016-11-04T10:39:25.574-0400",
  "updated": "2024-07-23T13:12:04.010-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Textfield Slider"
  ],
  "environment": "Internet Explorer 11 / Microsoft Edge\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6017/",
      "key": "FLUID-6017"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6030/edge & ie11 native slider behaviour.png",
      "filename": "edge & ie11 native slider behaviour.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T13:12:03.835-0400",
      "body": "Could not reproduce with MS Edge 126 on macOS 14.5. Also Internet Explorer is no longer supported.\n"
    }
  ]
}
---
On IE11 / Edge, the thumb of the native HTML slider used by the Textfield Slider component is cropped to the height of the track element.

<http://brennaobrien.com/blog/2014/05/style-input-type-range-in-every-browser.html> seems to indicate this is inherent to the MS browser behaviour around sliders, but suggests that there may be a workaround involving transparent borders (a quick attempt at this did not seem to work, at least in IE11).

It would be good to find an approach to styling the slider with CSS that allows the thumb to overflow the track. (see screenshot for the current appearance) - this doesn't present accessibility concerns, but it does make achieving certain designs harder in MS browsers.

        