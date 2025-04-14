---json
{
  "title": "FLUID-5536",
  "summary": "responsive UIO: Adjust \"text size\" and \"line spacing\" panels to their mobile look",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Cindy Li",
  "date": "2014-10-22T10:53:01.593-0400",
  "updated": "2017-04-13T17:02:20.329-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "3.0"
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
      "date": "2017-01-19T15:08:21.179-0500",
      "body": "Look into reusing code developed in this PR <https://github.com/fluid-project/infusion/pull/726>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-01-19T16:28:07.103-0500",
      "body": "Implement steppers to replace sliders\\\nMake use of Stans textfieldButton component\\\nRefactor textfieldSlider and textfieldButton to generalize common parts\\\nRemove jQuery Slider version from textfield slider component\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-02-24T09:05:22.600-0500",
      "body": "Some further discussion about factoring of grades, as well as handling of invalid entries.\\\n<https://botbot.me/freenode/fluid-work/2017-02-24/?msg=81489637&page=1>\n\nIn summary:\n\nMake the fluid.textfieldControl a modelComponent which gets added to the textfield as a sub component. the slider and stepper would add this as a grade to their own textfield subcomponents.. and the configuration for limiting the textfield to numbers should be set in the textfieldControl config somehow\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-04-12T15:45:32.398-0400",
      "body": "[The pull request for the infusion repo](https://github.com/fluid-project/infusion/pull/823) has been merged into the master branch at 365e884f4e572a26bbed9d8f6f8bd4f5ab0e0895\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-04-13T17:02:20.329-0400",
      "body": "[The pull request for the infusion-docs repo](https://github.com/fluid-project/infusion-docs/pull/120) has been merged into the master branch at 6c6bb9b49877a10a1b7979c77066d9e140c1c659\n"
    }
  ]
}
---
Implement steppers ( +/- buttons with a textfield ) to replace the textfield sliders

See designs: \
<https://wiki.fluidproject.org/display/fluid/%28Floe%29+User+Interface+%28Learner%29+Options+Mobile+and+Responsive+Design>

        