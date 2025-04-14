---json
{
  "title": "SJRK-83",
  "summary": "Add story viewing context",
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
  "date": "2018-04-18T14:12:25.442-0400",
  "updated": "2018-05-08T09:58:07.224-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-04-23T19:52:48.909-0400",
      "body": "\"sjrk.storyTelling.ui.storyViewer\" will not, for the time being, be renamed to anything else. Enough common functionality exists between the preview context of the editor and the single story view context to justify a shared base. For those aspects which are unique to either the previewer or the viewer, they could perhaps be present in both cases but simply turned on or off depending on requirements of the particular context\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-05-01T10:18:45.191-0400",
      "body": "This page has been created. The gradeName is currently \\`sjrk.storyTelling.page.storyView\\`, and there are a number of other files associated with it.\n"
    }
  ]
}
---
Create and hook up a ui/page/view for viewing a single story. This is intended to be shown either after the editing process has been completed and the user has hit "share", or if the user has navigated to a pre-existing story by some other means.

Much of the functionality of this will be shared with the existing grade "sjrk.storyTelling.ui.storyViewer", which may need to be renamed or refactored as a result of the similarity.

        