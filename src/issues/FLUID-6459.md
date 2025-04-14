---json
{
  "title": "FLUID-6459",
  "summary": "Replacing animate property to animation in css files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Sachin Chopra",
  "date": "2020-02-28T08:58:13.604-0500",
  "updated": "2020-02-28T11:07:15.463-0500",
  "versions": [
    "1.5.1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6459/Screenshot from 2020-02-28 19-25-37.png",
      "filename": "Screenshot from 2020-02-28 19-25-37.png"
    }
  ],
  "comments": [
    {
      "author": "Sachin Chopra",
      "date": "2020-02-28T11:07:15.463-0500",
      "body": "Instead of animation, animation-duration should be used.\n"
    }
  ]
}
---
There is no animate property in CSS. It should be renamed to animation.

The requisite changes are to be made in the following file:

<https://github.com/fluid-project/infusion/blob/master/src/components/textfieldControl/css/TextfieldSlider.css>

 

        