---json
{
  "title": "FLUID-5068",
  "summary": "for textfieldSlider and related components, the range values should not be stored in the model",
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
  "date": "2013-06-26T10:34:25.652-0400",
  "updated": "2013-08-13T08:53:15.966-0400",
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
      "date": "2013-08-13T08:53:09.768-0400",
      "body": "Merged in pull request ( <https://github.com/fluid-project/infusion/pull/350> ) at 0605a8fcce184d09c1295aac7841976a423473a9\n"
    }
  ]
}
---
The textfieldSlider takes in max and min as values of it's model, in addition to the actual model value. These are more options to the component and should be stored in a "range" object in the components options. This convention has also trickled upstream into the fluid.uiOptions.textSizer and fluid.uiOptions.lineSpacer components; which use textfieldSlider as a subcomponent. These will also need to be fixed.&#x20;

e.g. before:

{\
...\
model: {\
value: 1,\
min: 0,\
max: 100\
...\
}

e.g. after:&#x20;

{\
...\
model: {\
value: 1\
},\
range: {\
min: 0,\
max: 100\
}\
...\
}

        