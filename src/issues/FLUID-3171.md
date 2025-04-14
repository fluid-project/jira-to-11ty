---json
{
  "title": "FLUID-3171",
  "summary": " jquery sliders don't announce correct units in screen readers ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Alison Benjamin",
  "reporter": "Alison Benjamin",
  "date": "2009-09-11T13:35:25.000-0400",
  "updated": "2024-07-22T12:25:19.606-0400",
  "versions": [
    "1.2",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Textfield Slider"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3171/FLUID-3171.txt",
      "filename": "FLUID-3171.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3171/FLUID-3171b.txt",
      "filename": "FLUID-3171b.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3171/FLUID-3171c.txt",
      "filename": "FLUID-3171c.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-24T14:05:23.000-0500",
      "body": "Code Review Comments:\\\n\\===================\n\nThis seems to work in NVDA in Firefox. Not working in JAWS.\\\nWas it working in all cases for you, or is this the case where JAWS and IE are lacking support.\n\nLine 132 - 133 could probably be put into one call using the object version of the attr function. Which you used in the undo patch.\n\nFor the value of \"aria-valuetext\" you may want to look into our string templating scheme. Although it might be overkill in this case, you probably could at least move the unitText into a strings object, for consistency with other components.&#x20;\n\nstrings: {\\\nunitText: \"point\"\\\n}\n\n<http://wiki.fluidproject.org/display/fluid/Framework+Functions#FrameworkFunctions-fluid.stringTemplate>\n\nI think your test may actually be wrong.\\\nLine 49: I think slider.slider(\"value\") should actually be \"expected\". &#x20;\n\nYou should be able to write \" \" + \"point\" as \" point\". You may also want to make a function to assemble this string and then have tests for different types of unitText options.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-01-05T17:02:57.000-0500",
      "body": "Code Review Comments for the patch FLUID-3171c.txt\\\n\\==========================================\n\nuiOptions.js\\\n\\----------------\n\\\nline 158: by convention the unitTextTemplate should be in a strings object\n\nstrings: {\\\nunitTextTemplate: \"%val point\"\\\n}\n\nTextFieldSliderTests.js\\\n\\------------------------------\n\\\nthe functions testValueTextSetting and testSetting look virtually identical.\n\nThey seem to differ only on the format of the expected value for the valuetext test\n\nOne way to handle this would be to pass in the concatenated string for the expected valuetext as a third variable.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:51:30.926-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-14T07:02:47.464-0400",
      "body": "Currently it seems that the textfield slider only reads the value and no units.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T12:25:19.606-0400",
      "body": "Using a standard range input instead of jQuery slider now.\n"
    }
  ]
}
---
Give minimum text size jquery slider the correct units. should read "point" not "percent"

        