---json
{
  "title": "FLUID-6185",
  "summary": "Remove deprecated functions from Themes.styl",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Eloisa Guerrero",
  "date": "2017-08-10T13:24:48.425-0400",
  "updated": "2017-08-17T12:56:17.280-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eloisa Guerrero",
      "date": "2017-08-11T17:13:01.850-0400",
      "body": "Removing the function calls in PrefsEditor.styl caused the contrast options to change colours when the panel is closed and opened again. Removing it from SeparatedPanelPrefsEditor.styl retained the background-image and changed the contrast theme everywhere else. I suggest we keep them all as is because it seems to break some things one way or the other.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-08-14T09:14:03.591-0400",
      "body": "Eloisa Guerrero I wonder if part of the issue with the background of the page may be related to <https://fluidproject.atlassian.net/browse/FLUID-5407#icft=FLUID-5407>. Perhaps the enactors are missing a style or could improve on one that is being used. I'm thinking that the background in the content page is being changed by one of the prefs editor styles, instead of by the enactor styles.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-08-17T12:56:17.276-0400",
      "body": "After further exploration, it turns out that all of those stylus methods are, in fact, needed.\n"
    }
  ]
}
---
PrefsEditor, SeparatedPanelPrefsEditor, SeparatedPanelPrefsEditorFrame stylus files used methods from Themes.styl to change contrast themes. These methods have been deprecated but the function definitions remain in Themes.styl.

The following functions were deprecated:

* build-themes-separatedPanelPrefsEditorFrame(contrastThemes)

        