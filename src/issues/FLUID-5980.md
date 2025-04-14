---json
{
  "title": "FLUID-5980",
  "summary": "Inline edit instructions and tooltip overlap the input field",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2016-10-11T15:20:10.282-0400",
  "updated": "2016-10-19T15:12:18.239-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari iOS 10, Chrome 54, Safari 10, Firefox 49, MS Edge 38 (EdgeHTML 14), IE 11\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5980/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-10-11T15:20:57.477-0400",
      "body": "Screenshot.png shows the overlapping input, instructions, and tooltip.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-10-19T11:53:22.846-0400",
      "body": "From the jQuery height docs (<http://api.jquery.com/height/>)\\\n\"As of jQuery 1.8, this may require retrieving the CSS height plus box-sizing property and then subtracting any potential border and padding on each element when the element has box-sizing: border-box. To avoid this penalty, use .css( \"height\" ) rather than .height().\"\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-10-19T15:12:14.673-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/765> has been merged at 12acc5724694d703fddb48b441d4649a27c76190\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the inline edit demo ()&#x20;

2\) tap to open the inline edit field in edit mode (Notice that the instructions and tooltip overlap the input )

        