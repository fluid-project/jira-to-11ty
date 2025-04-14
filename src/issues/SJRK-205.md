---json
{
  "title": "SJRK-205",
  "summary": "Update \"Delete story\" server call to remove associated files as well",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-01-24T12:00:30.828-0500",
  "updated": "2019-02-05T10:45:23.841-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Add functionality to the server's "Delete story" endpoint to iterate over the blocks and automate the removal of all media files associated with a particular deleted story

Note:

* We should be wary of situations with identical file names
* Make sure it can’t delete a file for one story which is also used by another (verify whether this situation is possible)
* Make sure to have review from several people

        