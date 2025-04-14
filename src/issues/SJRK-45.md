---json
{
  "title": "SJRK-45",
  "summary": "Reorganize grades to reduce inheritance",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2017-12-12T15:55:58.431-0500",
  "updated": "2018-02-13T09:15:42.770-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-16/",
      "key": "SJRK-16"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-45/IMG_20171212_153408.jpg",
      "filename": "IMG_20171212_153408.jpg"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2017-12-14T18:14:08.174-0500",
      "body": "To consider: are the editor and previewer/viewer contexts to be implementations of a 'base' UI grade, which are in turn subcomponents of the uiManager, or are they simply subcomponent \"instances\" of the UI grade with any custom keys defined directly in the uiManager?\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-01-29T17:09:31.919-0500",
      "body": "Work complete and merged in: <https://github.com/BlueSlug/sjrk-story-telling/pull/1>\n"
    }
  ]
}
---
Reorganize the grades in the Storytelling Tool UI to have a more clearly readable grade structure, utilizing composition ("has-a") over inheritance/merging ("is-a").

The proposed structure would include a "UI Manager" grade which will keep track of the UI language and StorySpeaker, and will have as components of it the various views, "UI" grades or similar. I.e. the Editor and Viewer/Previewer are UI's, and the UI Manager has one or more UI's.

Each UI will have a TemplateManager which will in turn have as components a template/resource loader and template renderer. Each UI will have a story, and can have a gpii.binder to link story values to the DOM.

See attached image for a diagram of this proposed layout.

        