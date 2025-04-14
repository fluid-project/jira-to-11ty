---json
{
  "title": "SJRK-97",
  "summary": "Text-to-speech cuts off early",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-05-28T15:07:35.356-0400",
  "updated": "2020-04-14T08:47:30.644-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Windows Pro, version 10.0.16299 Build 16299\\\nChrome, version 66.0.3359.181 (Official Build) (64-bit)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6119/",
      "key": "FLUID-6119"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-06-25T11:20:16.639-0400",
      "body": "Confirmed issue persists in Chrome 67 on Windows 10.\n\nPossibly related: clicking the button in English will interrupt and stop the speaker, and clicking it once more will start it over. In Spanish, by contrast, clicking the button will immediately restart it without stopping it, every time.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-10-10T12:51:11.163-0400",
      "body": "This needs to be re-tested once the Orator can speak in Spanish 🙂\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-04-13T20:37:06.059-0400",
      "body": "Issue persists in Chrome 81 on Windows 10\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-04-14T08:47:30.644-0400",
      "body": "Are there Spanish voices, speech synthesizers, installed on your machine? Also it might depend on which particular locale you are using. e.g. es-es, es-mx\n"
    }
  ]
}
---
In Chrome 66 on Windows 10, the text-to-speech used by the "Listen to my story" button will only read part of the content when reading in Spanish.

English seems to work fine, but Spanish does not.

Possibly related to <https://fluidproject.atlassian.net/browse/FLUID-6119#icft=FLUID-6119>

Tested in Edge 41, but the button does not work at all. Using the browser's built-in Read Aloud feature, it does not read in a Spanish voice (may depend on system language settings rather than DOM lang attribute).\
Tested also in Firefox 60; while the button works, it only reads in an English voice. Again this may be due to system settings.

        