---json
{
  "title": "FLUID-4006",
  "summary": "Dropdown inline edit works inconsistently on most browsers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "heidi valles",
  "date": "2010-12-22T12:16:08.988-0500",
  "updated": "2014-03-03T13:39:14.973-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Mac 10.6: FF3.6, Safari 5\\\nWIn XP: FF3.6, IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T12:37:15.065-0400",
      "body": "I'm completely unable to reproduce this one. Heidi, if you can reproduce it, feel free to reopen this issue with suggestions for how to reproduce.\n"
    }
  ]
}
---
When following the test plan for the dropdown inline edit, \
<http://wiki.fluidproject.org/display/fluid/Inline+Edit+QA+Test+Plan+-+Dropdown>

choosing an item works inconsistently: sometimes it does, sometimes it doesn't choose the option selected. There are no js errors or series of events that seem to recreate the problem consistently, tho I think it only happens when using a mouse.&#x20;

        