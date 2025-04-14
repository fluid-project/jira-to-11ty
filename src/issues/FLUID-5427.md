---json
{
  "title": "FLUID-5427",
  "summary": "Unable to change image selection in keyboard a11y demo using VoiceOver navigation controls",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "reporter": "Justin Obara",
  "date": "2014-06-09T09:55:59.158-0400",
  "updated": "2014-06-16T11:48:31.738-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Keyboard Accessibility"
  ],
  "environment": "Safari 7 (Mac OS 10.9)(VoiceOver)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-06-16T11:48:31.736-0400",
      "body": "VoiceOver's specific navigation controls shouldn't actually activate things.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the keyboard a11y demo

2\) Navigate to the list of images

3\) Attempt to select a different image using VoiceOver's navigation controls (e.g. ctrl-options-arrow)\
Notice that you can get it to announce what each image is, but you are unable to select one. \
Note that using the standard arrow key interaction works to select the images, and you can use "space" to select.

Note that this also goes for rank using the trackpad, but it does work with the keyboard (ctrl-option-space)

        