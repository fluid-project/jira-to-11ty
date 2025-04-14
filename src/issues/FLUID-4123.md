---json
{
  "title": "FLUID-4123",
  "summary": "Skips the save button and focus on cancel button",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Golam Chowdhury",
  "date": "2011-02-28T10:46:30.494-0500",
  "updated": "2014-03-03T13:37:30.450-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 6,7,8 on Windows XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T11:42:37.530-0400",
      "body": "I can't reproduce this anymore in 1.4, so resolving.\n"
    }
  ]
}
---
After entering using Tiny MCE then clicked on the tab button, the focus will skip the save button and goes into the cancel button.

To reproduce do the following:\
-Go to <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>\
-Using your keyboard tabkey focus on Rich Text Inline Edit with Tiny MCE\
-Click on Edit link once edit link is focused\
-Enter some information on Rich Text Inline Edit with Tiny MCE\
-Using your tab key, try to save then you will notice save button was skipped

        