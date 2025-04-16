---json
{
  "title": "SJRK-10",
  "summary": "Implement a prototype of an audio story recorder",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2017-10-03T18:50:03.328-0400",
  "updated": "2018-11-28T12:16:28.658-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-31/",
      "key": "SJRK-31"
    }
  ],
  "attachments": [],
  "comments": []
}
---
We envision the Social Justice Repair Kit's storytelling tools to be expressive and multimodel, supporting the telling of stories using audio, video, text, images, and more.

Given this, we should implement a prototype of the components required to record audio stories.

Alan Harnum has [implemented a prototype audio recorder](https://github.com/waharnum/transcribingRecorder) that also includes the ability to transcribe voice recordings using the Web Speech Recognition APIs.

I have [refactored this implementation](https://github.com/colinbdclark/transcribingRecorder/tree/componentization) and am progressively adding new functionality such as:

* Context awareness for the Chrome-only functionality such as SpeechRecognition-based transcription
* Support for a Web Audio-based recording back-end that will have greater browser compatibility than the current MediaRecorder implementation

This prototype should completed, merged into a Fluid Project repository with the sjrk- prefix, and eventually integrated into the main SJRK storytelling repository (which doesn't seem to exist yet?).

        