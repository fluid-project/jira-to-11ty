---json
{
  "title": "FLUID-4947",
  "summary": "Enable self voicing feature of the UIOptions.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2013-03-26T12:45:14.462-0400",
  "updated": "2013-10-04T09:17:12.984-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4947/uio-tts-ideation.png",
      "filename": "uio-tts-ideation.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4947/uio-tts-ideation-contrasts.png",
      "filename": "uio-tts-ideation-contrasts.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4947/uio-tts-ideation-contrasts-with-backgrounds.png",
      "filename": "uio-tts-ideation-contrasts-with-backgrounds.png"
    }
  ],
  "comments": [
    {
      "author": "Arash Sadr",
      "date": "2013-03-28T15:00:10.688-0400",
      "body": "We decided to come up with something simple and easy to use. A floating control panel appears when text to speech is turned on. It has  play/pause and stop button, and a separated section as a header, indicating that it could be dragged. \\\nIf user presses play, text to speech will automatically start reading the content of the page, which could be tabbed through. The user could also highlight something (a paragraph) and press Play. By pressing Pause, text to speech will stop and stay where it was paused. But pressing Stop will jump to the beginning of the selected paragraph or page. &#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-07-26T12:01:28.839-0400",
      "body": "Merged in pull request ( <https://github.com/fluid-project/prefsEditors/pull/8> ) into the fluid-project/prefsEditors repo ( <https://github.com/fluid-project/prefsEditors> ) at 0c09f2ed2113104b6ecac426627ee36fae629393\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-04T09:17:12.975-0400",
      "body": "The initial work for this seems to have been done for the Exploration Tool and Climate Change demo. We should open new specific jiras for any further work.\n"
    }
  ]
}
---
Create an action ant wrapper around the functionality that will be reading out items on the page.

        