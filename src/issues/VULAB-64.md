---json
{
  "title": "VULAB-64",
  "summary": "double // when project setup on root domain.",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-10-30T11:55:14.000-0400",
  "updated": "2008-10-30T14:58:11.000-0400",
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
      "date": "2008-10-30T11:55:36.000-0400",
      "body": "vulab5\n"
    },
    {
      "author": "Blake E",
      "date": "2008-10-30T14:28:42.000-0400",
      "body": "I modified index.php in the main directory to avoid this issue.\n"
    }
  ]
}
---
there are two // in the url when the system is setup on the root directory of a domain. Somewhere there is an extra slash.

        