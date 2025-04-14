---json
{
  "title": "SJRK-346",
  "summary": "Karisma: image, audio, video contents are lost if switching the language at the preview",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Gregor Moss",
  "reporter": "Cindy Li",
  "date": "2020-04-23T13:28:51.252-0400",
  "updated": "2020-04-28T12:21:24.957-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-199/",
      "key": "SJRK-199",
      "summary": "Files are not uploaded if UI language is changed"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-284/",
      "key": "SJRK-284",
      "summary": "Re-enable language selection"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\. Start the site with the karisma theme;\
2\. Click "story tool" to add a story;\
3\. Add text, image, audio and video blocks with contents;\
4\. Click "Continue", add title, description etc;\
5\. Click "Preview" to go to the preview page. All block contents are shown properly;\
6\. Click "Español" link to switch to Spanish;\
7\. The page is reloaded. Only the text block content and title, author, story descriptions remain on the page. Contents for image, audio, video blocks are lost.

        