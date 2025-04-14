---json
{
  "title": "FLOE-119",
  "summary": "Write metadata to the DOM",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-11-29T12:42:12.017-0500",
  "updated": "2013-12-18T11:59:03.679-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-12-10T10:37:57.644-0500",
      "body": "For the sake of the demo, the placeholder markup will be replaced by real video markup with the necessary metadata included.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-12-11T10:35:54.863-0500",
      "body": "Submitted a pull request <https://github.com/fluid-project/metadata/pull/4>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-12-17T08:56:10.652-0500",
      "body": "Pull request ( <https://github.com/fluid-project/metadata/pull/4> ) merged into the project repo at 5faf68d0c06c3541bd21910018d1450f280a50c1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-12-17T08:56:55.527-0500",
      "body": "Submitted another pull request to update the metadata written out for a video element. \\\n<https://github.com/fluid-project/metadata/pull/9>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-12-18T11:58:50.881-0500",
      "body": "Pull request ( <https://github.com/fluid-project/metadata/pull/9> ) was merged into the project repo at 8260b36e77b87e4e40eee33d57f18971e817915c\n"
    }
  ]
}
---
Metadata generated/created for the resources in the demo should be written to the DOM. We'll probably need to create a component that writes out some model of the metatdata from memory into the DOM.

Example model:

{\
url: "path/to/video.mp4",\
highContrast: true,\
signLanguage: true,\
flashing: flashing, // noFlashing, unknown are alternatives\
captions: \[{\
src: "path/to/captions.srt",\
language: "fr-CA" // language code\
}],\
audio: "available", // unavailable, unknown are alternatives\
audioKeywords: \["dialogue", "soundtrack", "sound effect"]\
}

        