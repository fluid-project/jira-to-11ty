---json
{
  "title": "FLUID-703",
  "summary": "Tab focusing uploaded file checkmark gives incorrect feedback in JAWS",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Jonathan Hung",
  "date": "2008-06-03T14:45:00.000-0400",
  "updated": "2011-02-22T16:27:42.666-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "WinXP, JAWS\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-666/",
      "key": "FLUID-666",
      "summary": "Enhance Uploader accessibility"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-07-23T00:08:45.000-0400",
      "body": "checkmark is no longer selectable\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:42.664-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Tab focusing the green check mark for a file already uploaded will read "Remove file from queue" – which is incorrect.

Bigger question: should the check marks even be tab focusable since the user can not perform any actions on them anyway? Could be annoying to have to tab through a whole list of uploaded files to get to a file you want to remove.

dev-iteration39

        