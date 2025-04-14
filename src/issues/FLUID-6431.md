---json
{
  "title": "FLUID-6431",
  "summary": "The play button doesn't follow selection made with right click",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2019-11-21T12:55:48.418-0500",
  "updated": "2019-12-05T16:26:42.454-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2019-12-05T16:25:12.378-0500",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/974) has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion/commit/46a1b887dcc4d78a78b3c3f8faaab498afc782cd).\n"
    }
  ]
}
---
Using Chrome and Safari, for the selection reader in the orator, when a set of text is selected a play button appears near the start position. If a new selection is made the button is removed and re-rendered at the new selection start. However, if the new selection was made using a right-click, the play button stays in the original position. This is particularly noticeable in UIO+ with the "right-click to select" feature.

 

Steps to reproduce (Infusion):

1. Open the Orator Demo
2. select some text
3. change the selection by right clicking on some other text
4. Notice that the play button stayed in the original position

 

Steps to reproduce (UIO+):

1. Using chrome enable the UIO+ browser extension
2. Enable the "right-click to select" preference and the "text-to-speech" preference
3. right click on some text
4. right click on a different block of text
5. Notice that the play button stayed in the original position

        