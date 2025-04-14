---json
{
  "title": "SJRK-381",
  "summary": "Support multiple video sources for media format fallbacks",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2020-07-29T21:16:14.939-0400",
  "updated": "2020-07-29T21:16:30.710-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-311/",
      "key": "SJRK-311",
      "summary": "Add embedding of YouTube videos"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The storytelling tool allows a user a to upload a video. However, not all browsers support the same video formats. To handle this, multiple \<source> elements are used in the video tag to provide fallback options. (see: <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video> ). For example, by default Firefox in Ubuntu does not support the AAC codec, Safari doesn't support webm in video tags.

For uploaded files we could consider transcoding them on the server to a variety of supported formats. However, if we allow bare urls to externally hosted videos (see: SJRK-311) we'll need to provide an option to supply fallback URLs.

        