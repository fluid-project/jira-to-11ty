---json
{
  "title": "FLUID-4326",
  "summary": "Increased text-size & line-spacing breaks browse/add more button in Uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "heidi valles",
  "date": "2011-07-07T09:44:50.150-0400",
  "updated": "2011-07-09T08:46:47.575-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-08T16:31:54.435-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-08T17:40:08.319-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/104> merged into project repo at af887c9842c6ee9294947d2a300f4a030871c689\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-09T08:46:47.572-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/105> merged into project repo at 29f1280ad5f574be16a019053ed5b7682e8b3529\n"
    }
  ]
}
---
I think this can be solved by changing the width/height of the browse/add more button to use ems instead of pxs. Right now when text size and line height is increased, the text gets cut off and the button is no longer click-able.

uploader.css (lines 208 &  218)

.fl-uploader-browse.fl-uploader-browseMore {\
width: 65px;\
}\
.fl-uploader-browse {\
height: 24px;\
}

And also change the clickable area to use ems. The above will make the whole button visible, but make sure the whole thing is also clickable. This stuff:

(line 223)\
.fl-uploader-browse input {\
bottom: 28px;\
float: right;\
height: 40px;\
left: 10px;

        