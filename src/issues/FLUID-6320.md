---json
{
  "title": "FLUID-6320",
  "summary": "Orator playback doesn't pause on a newly opened Chrome browser",
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
  "date": "2018-08-13T17:35:08.206-0400",
  "updated": "2024-07-24T13:06:48.265-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Text To Speech"
  ],
  "environment": "Chrome 68\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-09-17T13:53:14.896-0400",
      "body": "Related UIO+ issue: <https://issues.gpii.net/browse/GPII-3286>\n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2021-02-16T11:49:34.239-0500",
      "body": "I encountered this while using the Orator on [stories.sojustrepairit.org](https://stories.sojustrepairit.org) on Edge (version 88.0.705.68 running on macOS 11.2.1).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-24T13:06:48.265-0400",
      "body": "Could not reproduce with Chrome 126 on macOS 14.5\n"
    }
  ]
}
---
Steps to reproduce:

1. Quit any open instances of Chrome
2. Launch Chrome
3. Go to the Orator Demo ( <https://build.fluidproject.org/infusion/demos/orator/> )
4. Click the "Play" button to read back text
5. Click the "Pause" button to stop the reading

Notice that the playback doesn't pause. If the page is reloaded, or if a text selection is played, the pause will now function properly. Also this only happens after a Chrome is launched. If it is already open before trying the above it is likely to function properly.

 

This is a Chrome bug and has been filed at <https://bugs.chromium.org/p/chromium/issues/detail?id=873812&can=2&start=0&num=100&q=speechsynthesis%20pause&colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Component%20Status%20Owner%20Summary%20OS%20Modified&groupby=&sort=>

        