---json
{
  "title": "VULAB-74",
  "summary": "project delete button doesn't redirect",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-11-04T14:07:19.000-0500",
  "updated": "2008-11-04T14:24:41.000-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Blake E",
      "date": "2008-11-04T14:07:25.000-0500",
      "body": "vulab6\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-04T14:11:53.000-0500",
      "body": "🙂 fixed. It redirects.\n\nI also added the functionality to the \"view\" project page (is for viewing active projects)\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-04T14:24:41.000-0500",
      "body": "I even added a nice little fadeout on the homescreen after the deletion.\n"
    }
  ]
}
---
when deleting a project it should redirect the person to the main homepage (maybe even with the success message there)

        