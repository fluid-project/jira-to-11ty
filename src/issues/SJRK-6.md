---json
{
  "title": "SJRK-6",
  "summary": "Implement basic CouchDB config management component for Infusion",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2017-08-31T14:07:42.164-0400",
  "updated": "2017-11-02T13:22:35.742-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2017-09-05T17:30:20.765-0400",
      "body": "I've created a Grunt plugin and integrated both it and the couch-config component into sjrk-storyTelling-server: <https://github.com/BlueSlug/sjrk-storyTelling-server/tree/SJRK-6>\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2017-10-23T17:12:22.442-0400",
      "body": "PR created, ready for review: <https://github.com/waharnum/sjrk-storyTelling-server/pull/3>\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2017-11-02T13:22:35.739-0400",
      "body": "PR at <https://github.com/waharnum/sjrk-storyTelling-server/pull/3> has been merged\n"
    }
  ]
}
---
The Storytelling Tool is using CouchDB for persistence and expects to make a fair amount of use of CouchDB design document features to enable features such as browse and search.

Per this thread on fluid-work (<http://lists.idrc.ocad.ca/pipermail/fluid-work/2017-August/010443.html>), an Infusion component that can do basic DB configuration management (ensure a database exists, ensure it has certain design document functions, etc) has been identified as useful to have.

Some initial work has already gone on in this direction by @@Alan Harnum and @@Gregor Moss in this repo: <https://github.com/waharnum/couch-config> - this issue makes it official.

        