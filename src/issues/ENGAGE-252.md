---json
{
  "title": "ENGAGE-252",
  "summary": "Integrate Related Artifacts as part of the Artifact View ",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Michelle D'Souza",
  "date": "2010-01-18T16:34:09.000-0500",
  "updated": "2010-02-12T14:33:12.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Artifact View"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-05T15:50:51.000-0500",
      "body": "Bug Parade Engage 0.3&#x20;\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:38:35.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:38:49.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-12T14:33:12.000-0500",
      "body": "I reviewed and committed Yura's completely reworked Artifact View, which resolves this issue.\n\nA couple of outstanding issues for related artifacts still exist, but have been filed as separate JIRAs:\n\n1\\. Some related artifacts just aren't in the system\\\n2\\. Related artifact images are not currently displaying properly\\\n3\\. Some of Hugues' data contains mangled special characters\n"
    }
  ]
}
---
Related Artifacts shall be implemented as part of the cabinet inside of the artifact sections along with the media and comments. The only tricky part is to figure out how to produce target urls for the related artifact views.

        