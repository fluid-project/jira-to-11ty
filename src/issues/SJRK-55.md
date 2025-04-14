---json
{
  "title": "SJRK-55",
  "summary": "Create block-style stories from pre-supplied models",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Alan Harnum",
  "date": "2018-03-02T15:44:14.774-0500",
  "updated": "2018-05-25T15:12:52.151-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-53/",
      "key": "SJRK-53"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-54/",
      "key": "SJRK-54"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Going hand in hand with SJRK-53, the client-side components should be able to recreate a story from that model structure.

With a proper model storage structure this should be relatively straightforward - loop each block and fire the appropriate block creation event with a presupplied model.

        