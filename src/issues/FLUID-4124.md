---json
{
  "title": "FLUID-4124",
  "summary": "Tiny MCE doesn't show \"Click Edit\" on IE 7",
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
  "date": "2011-02-28T12:11:50.202-0500",
  "updated": "2014-03-03T13:37:27.693-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 7 Windows XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T11:24:52.899-0400",
      "body": "I am unable to reproduce this in v1.4, so it seems to have been fixed.\n"
    }
  ]
}
---
After deleting the content is side Tiny MCE and click on save button. It doesn't show "Click Edit".

To reproduce:\
-Go to <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>\
-Using your mouse or keyboard click on Edit link on Tiny MCE.\
-Delete the content inside the editor and click save.\
-You will notice the "Click Edit" text doesn't show.

        