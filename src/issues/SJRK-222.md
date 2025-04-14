---json
{
  "title": "SJRK-222",
  "summary": "Can't upload mp4's in iOS (to confirm)",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-02-13T21:17:20.887-0500",
  "updated": "2020-11-12T15:38:15.045-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-11-12T15:38:15.045-0500",
      "body": "I was able to upload an MP4 file while testing for the 0.4 release. I was using Safari 14\n"
    }
  ]
}
---
Confirm that this is the case!

It is possible, using the current method for restricting file uploads for video blocks to this MIME type

```java
accept="video/*"
```

that MP4 files are excluded from being uploaded using Safari in iOS or macOS. This may be solved by using

```java
accept="video/*,video/mp4"
```

See this link for more details:\
<https://stackoverflow.com/questions/181214/file-input-accept-attribute-is-it-useful#comment30615540_10503561>

        