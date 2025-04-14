---json
{
  "title": "FLUID-4519",
  "summary": "Default line height in UIO demo overlaps the lines",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "James Yoon",
  "date": "2011-10-11T17:00:22.669-0400",
  "updated": "2013-10-04T09:33:22.905-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "Win 7 Firefox\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4498/",
      "key": "FLUID-4498",
      "summary": "Background colour with some fonts cause overlap in showcase demo instructions"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4494/",
      "key": "FLUID-4494",
      "summary": "Comic Sans with \"Emphasize links\" - fl-underline gets cut off, needs more space"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4519/Screen Shot 2011-10-11 at 5.00.34 PM.png",
      "filename": "Screen Shot 2011-10-11 at 5.00.34 PM.png"
    }
  ],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-10-12T10:11:46.206-0400",
      "body": "UIEnhancer currently sets calculated em value of \"line-height\" on the \\<body> tag to achieve the line spacing adjustment. However, rather than this em value being inherited by the descendant elements of \\<body>, it was the computed px value that's calculated based on the \\<body> font size. Since the descendant elements that have larger font size are supposed to have larger line height, the px value that's computed based on the \\<body> font size would be too small for them which results in the overlapping.\n\nThe potential solution is, rather than applying em value onto \\<body> line-height, apply the multiplier number value instead.\n\nThe reference doc of the valid \"line-height\" values: <http://www.w3schools.com/cssref/pr_dim_line-height.asp>\n\nA useful presentation of how \"line-height\" is inherited and calculated: <http://www.slideshare.net/maxdesign/line-height>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-04T09:33:22.902-0400",
      "body": "Seems to have been fixed.\n"
    }
  ]
}
---
The default line height of the text in the UIO demo is too tight, and causes the lines to overlap with each other.

This happens even when no settings are applied, but is most visible when one carries out the following:\
1\. Increase text size to maximum\
2\. Change contrast theme to b/w\
3\. Note behaviour of text and line height under section 1 of "Some helpful tips"

        