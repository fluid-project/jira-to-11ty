---json
{
  "title": "FLUID-5075",
  "summary": "textfieldSlider code not enclosed in a closure defining $",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2013-06-27T16:37:27.252-0400",
  "updated": "2013-08-16T10:56:03.063-0400",
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
      "date": "2013-08-12T09:19:02.749-0400",
      "body": "Submitted a pull request ( <https://github.com/fluid-project/infusion/pull/387> )\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-08-13T12:09:59.423-0400",
      "body": "Merged into project repo at 6bcf6d0\n"
    }
  ]
}
---
The textfieldSlider code is not wrapped in the usual closure, and so when $ is used in fluid.textfieldSlider.slider.init() here:

<https://github.com/fluid-project/infusion/blob/master/src/components/uiOptions/js/TextfieldSlider.js#L163>

it can result in an error. This is happening in a drupal installation where jQuery is being provided by drupal instead of Infusion.

        