---json
{
  "title": "FLUID-6061",
  "summary": "Text-to-speech not working for Prefs Framework demo in iOS",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2016-11-11T10:56:44.236-0500",
  "updated": "2017-07-31T16:19:41.491-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Demos",
    "Prefs Framework",
    "Text To Speech"
  ],
  "environment": "Safari (iOS 10.1.1)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-07-31T16:19:41.488-0400",
      "body": "Could not reproduce using iOS 10.3.3\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the [Prefs Framework Demo](http://build.fluidproject.org/infusion/demos/prefsFramework/)\
2\. Open the prefs editor\
3\. Enable text-to-speech

Notice that nothing is spoken.

        