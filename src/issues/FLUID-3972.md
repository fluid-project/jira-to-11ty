---json
{
  "title": "FLUID-3972",
  "summary": "Cannot select with keyboard in dropdown inline edit in IE6 or IE7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "James Yoon",
  "date": "2010-12-20T15:54:02.063-0500",
  "updated": "2014-03-03T13:39:27.372-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE6, IE7 in Windows XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T12:50:49.077-0400",
      "body": "I'm unable to reproduce this one in v1.4\n"
    }
  ]
}
---
To reproduce:\
1\. Select dropdown inline edit with keyboard\
2\. Navigate to a different item using keyboard\
3\. Press enter\
4\. Selected item does not appear in the field

        