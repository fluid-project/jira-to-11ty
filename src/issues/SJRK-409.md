---json
{
  "title": "SJRK-409",
  "summary": "Update server stories on local changes",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-10-22T16:37:19.954-0400",
  "updated": "2020-10-29T13:31:16.793-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-289/",
      "key": "SJRK-289"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Persist any changes to a story from the client side to the server side, as well as at regular intervals (e.g. every few minutes). This should incorporate some debouncing & throttling to ensure the update operation isn't being repeated unnecessarily or so frequently that it impacts performance at any point.

The goal of this update is to allow signed-in users to access and edit unpublished stories from any machine/browser, not only the one they used to create the story originally.

The solution to this should also take into account (pun!) the implications of this type of operation on stories which are already published, as automatically saving changes to a "live" story is probably unexpected behaviour.

        