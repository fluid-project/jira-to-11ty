---json
{
  "title": "SJRK-221",
  "summary": "Once the current round of Story Jams is complete, make the site read-only",
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
  "date": "2019-02-13T21:13:59.180-0500",
  "updated": "2019-04-01T14:53:58.358-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-04-01T13:38:06.471-0400",
      "body": "We did this in <https://fluidproject.atlassian.net/browse/SJRK-239#icft=SJRK-239>. Oops 🙂\n"
    }
  ]
}
---
Once the February 2019 story jams are wrapped up (last one should be on February 21st, I believe), make the site read-only by:

* removing the Publish button from the editor
* making the Browse page the first page of the site, not the Edit page
* disabling the save stories endpoint from the server

        