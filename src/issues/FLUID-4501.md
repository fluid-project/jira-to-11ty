---json
{
  "title": "FLUID-4501",
  "summary": "Textfield-sliders incorrectly treating leading-decimal numbers as strings",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Anastasia Cheetham",
  "date": "2011-10-04T09:47:31.924-0400",
  "updated": "2015-06-10T10:49:58.293-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Textfield Slider"
  ],
  "environment": "Mac OS X Firefox 29.0.01, Safari 6.1, Chrome 35.0.1916.114\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-10T10:49:58.291-0400",
      "body": "The smallest value now is 1, so a leading decimal (e.g. .5) would be invalid either way.\n"
    }
  ]
}
---
If you enter a decimal number smaller than 1 without a leading 0 (e.g. .5 instead of 0.5), the textfield-slider treats it as a string and ignores it. If it correctly treated it as a number, it would set the value of the slider to the minimum instead of ignoring it. I checked with Heidi and James in the channel, and they feel that .5 should be counted as a number, not a string (<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2011-10-04>).

To reproduce:\
1\) Open the UIO dialog (either fat-panel or full-page)\
2\) Set one of the textfield-sliders to 1.5 to set it up.\
3\) Enter .5 into the textfield\
The value remains at 1.5, whereas it should be adjusted to the minimum of 1\
4\) Enter 0.5 into the textfield\
The value is correctly adjusted to the minimum of 1

        