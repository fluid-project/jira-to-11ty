---json
{
  "title": "FLUID-6565",
  "summary": "Using the enter/space keys on adjusters inputs submits the Prefs Framework form",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2020-10-27T16:46:04.998-0400",
  "updated": "2020-10-28T09:52:39.288-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6539/",
      "key": "FLUID-6539",
      "summary": "Investigate implementing switch components using a button element"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-10-28T09:52:35.905-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/1021) that fixes this issue has been merged into the project repo main branch at [this commit](https://github.com/fluid-project/infusion/commit/b5ba7749ccb80b1eb7cd3b0e666311059bf3f3eb).\n"
    }
  ]
}
---
Steps to reproduce:

1. Open the UI Options demo
2. Open the show preferences panel
3. Using the keyboard select one of the contrast themes
4. Press the "enter" key
5. Notice that the panel disappears because the form submitted 

It appears the issue is related to FLUID-6539 and the buttons for the switch are triggering the form to submit. This is on the same as FLUID-6507 which submits the form when there is only one text input field.

The solution may be just to update the button type to "button". 

        