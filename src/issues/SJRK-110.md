---json
{
  "title": "SJRK-110",
  "summary": "Make hasMobileCamera detection more robust",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Gregor Moss",
  "date": "2018-05-31T15:47:38.978-0400",
  "updated": "2019-09-12T13:42:09.128-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-95/",
      "key": "SJRK-95"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-09-12T13:42:09.118-0400",
      "body": "The hasMobileCamera detection has been removed from the project\n"
    }
  ]
}
---
In the imageBlockEditor grade, the method to detect whether a user's device has camera capture capabilities (function sjrk.storyTelling.mobileCameraAware.hasMobileCamera) is simply checking the user agent string. This is neither reliable nor recommended, as a UAS could easily be spoofed, customized or otherwise altered. The current check also only works for UAS's that have "iphone", "ipad" or "android" in them, so it is leaving out many otherwise supported devices.

Investigate other feature detection techniques. (modernizr?)

        