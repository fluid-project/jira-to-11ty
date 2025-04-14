---json
{
  "title": "ENGAGE-422",
  "summary": "Panels should read \"Hide x\" when expanded (currently reads as \"Show x\" even when expanded)",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "James Yoon",
  "reporter": "James Yoon",
  "date": "2010-02-19T16:01:25.000-0500",
  "updated": "2014-03-03T13:46:38.210-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Artifact View"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-422/ENGAGE-422.patch",
      "filename": "ENGAGE-422.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-422/ENGAGE-422tests.patch",
      "filename": "ENGAGE-422tests.patch"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-03-11T14:56:20.000-0500",
      "body": "there's an encoding problem with the patch where JIRA converts \"é\" into a wrong character. Please double check if the message bundle has proper characters in it after applying the patch.\n"
    }
  ]
}
---

        