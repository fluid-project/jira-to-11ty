---json
{
  "title": "FLUID-6172",
  "summary": "Add a model transformation for rounding to a decimal value",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2017-07-25T09:33:11.798-0400",
  "updated": "2017-07-31T10:32:33.976-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-07-29T09:45:08.516-0400",
      "body": "PR ( <https://github.com/fluid-project/infusion/pull/837> ) was merged into the project repo at 8c48d077aa3d528ed0447d6cf0f2cadb99853df0\n\n \n\nThe Infusion-Docs PR ( <https://github.com/fluid-project/infusion-docs/pull/124> ) still needs to be merged.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-07-31T10:32:23.665-0400",
      "body": "The Infusion-Docs PR ( <https://github.com/fluid-project/infusion-docs/pull/124> ) was merged at 5480f5927754c9d3284573a9cd0583aba776a72c\n"
    }
  ]
}
---
Currently there is only a rounding transformation to round to the nearest integer. However, there may be cases where you'd want to round to some decimal value. For example, in GPII the common terms value for font size is in pts. In the UIO+ browser extension we want a magnification factor. The obvious solution here is to divide by the default size setting ( 12pt in this case ), but that may result in a number like 1.333333333333, which could be handled as 1.3 instead.

The fluid.transforms.round transformation should be modified to handle transforms to optionally handle transforms to a give decimal based on the scale. Similar to how the fluid.transforms.numberToString transformation works.

See: <https://botbot.me/freenode/fluid-work/2017-07-25/?msg=89018961&page=1>

        