---json
{
  "title": "SJRK-354",
  "summary": "Constrain file uploads to broadly-supported formats",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-04-30T17:50:21.272-0400",
  "updated": "2020-11-12T16:43:49.879-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2020-04-30T18:10:40.164-0400",
      "body": "All modern browsers support the H.264 codec in an MPEG-4 container. Most browsers, with the exception of Safari, also support videos encoded with the VP8 and VP9 codecs within WebM containers. It sounds like the AV1 codec has also been adopted by all modern browsers except Safari (Apple is extremely conservative about codecs because of patent fears, not to mention the issue of hardware decoders to save battery life), and it looks like both WebM and MP4 containers are supported. <https://caniuse.com/#search=video%20format>\n\nWe probably can't detect codecs within a file that hasn't yet been uploaded, so I'd guess that we're safe to filter on the various MP4 and WebM MIME types. Presumably we'll also need to validate on the server side in case someone's editing our markup in the inspector tools.\n\nIn the future, we can consider a back-end process that uses ffmpeg to re-encode videos on the fly to H.264/m4v, but that's likely a big feature.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-04-30T18:16:19.506-0400",
      "body": "Thanks for that detail, Colin! I expect that once <https://fluidproject.atlassian.net/browse/SJRK-289#icft=SJRK-289> has been completed server-side, this should make the codec detection, validation and potential conversion of media files more feasible.\n"
    }
  ]
}
---
When uploading files to a media block (image, audio, video), add restrictions to limit allowed files to those which work in the supported browsers.

This work includes research into which formats are supported by which browsers, followed by adding the restrictions.

Colin Clark has conducted some similar research for his work on Bubbles, and he mentioned that (at the time of filing) h.264-encoded video in MPEG containers and WebM are basically the only broadly-supported formats. This is worth discussing.

        