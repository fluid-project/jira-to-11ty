---json
{
  "title": "SJRK-5",
  "summary": "Text-to-speech not working in Edge",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Gregor Moss",
  "date": "2017-08-24T15:51:38.819-0400",
  "updated": "2019-09-11T17:28:05.086-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Windows 10, Edge 40.15063.0.0\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-09-11T17:28:05.082-0400",
      "body": "This no longer seems to be an issue in Edge 44\n"
    }
  ]
}
---
When running the storytelling site in Edge, the "Listen to my story" button doesn't seem to work

 

Needs further investigation. Text to speech component tests passing in Edge: <https://build.fluidproject.org/infusion/tests/component-tests/textToSpeech/html/TextToSpeech-test.html>

        