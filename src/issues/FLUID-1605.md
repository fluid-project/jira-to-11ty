---json
{
  "title": "FLUID-1605",
  "summary": "Inline Edit: Undo/Redo icon in wrong place",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Allison Bloodworth",
  "date": "2008-09-23T20:52:42.000-0400",
  "updated": "2008-09-26T15:04:06.000-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1328/",
      "key": "FLUID-1328",
      "summary": "inline edit  - undo/redo icon placement"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1605/Picture 1.png",
      "filename": "Picture 1.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-24T13:17:11.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-25T14:54:12.000-0400",
      "body": "Appears to have been resolved with fix for <https://fluidproject.atlassian.net/browse/FLUID-1602#icft=FLUID-1602>\n\nVerified using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
On <http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html> if you edit the section title, the undo icon is placed on the wrong line, in the wrong place (see attached screenshot).

The undo icon should be right next to the item that was edited, as specified in the "Change Section name" scenario on this page: <http://wiki.fluidproject.org/display/fluid/Simple+Text+Inline+Edit+Storyboard>.

        