---json
{
  "title": "FLOE-206",
  "summary": "Create local persistence using PouchDB",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-07-24T14:07:49.397-0400",
  "updated": "2014-07-31T09:15:17.956-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Feedback Tool"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-197/",
      "key": "FLOE-197",
      "summary": "Save requests for metadata feedback tool"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-28T13:53:06.492-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/metadata/pull/31>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-07-31T09:15:12.893-0400",
      "body": "Merged into the master branch @ 9fdf2da750ca74358bb41779e7018ee3a3e75807\n"
    }
  ]
}
---
As a first step for persisting the requests data form the feedback tool, we should implement a local data storage scheme using PouchDB.&#x20;

Individual user data will be stored in a documents with the following structure.&#x20;

{\
\_id: \<user\_id>,\
match: boolean,\
not\_interesetd: boolean,\
other: string\
requests: {\
\<request\_type>: boolean\
...\
},\
votes: {\
\<vote\_type>: boolean\
}\
}

Note that other than the \_id field, the rest are optional.

        