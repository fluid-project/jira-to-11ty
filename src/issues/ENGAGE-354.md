---json
{
  "title": "ENGAGE-354",
  "summary": "Ensure that Artifact view is Internationalizable",
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
  "reporter": "Justin Obara",
  "date": "2010-02-08T17:20:07.000-0500",
  "updated": "2010-02-12T14:36:56.000-0500",
  "versions": [],
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
      "date": "2010-02-08T17:20:21.000-0500",
      "body": "Bug Parade Engage 0.3&#x20;\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:39:15.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:39:33.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-12T14:36:56.000-0500",
      "body": "I've reviewed and committed Yura's substantial refactoring of ArtifactView, which is fully internationalized.\n"
    }
  ]
}
---
Ensure that Artifact View is internationalizable

The component should have a strings options object for any strings used by the component. The service for it should be able to locate the correct message bundle (as identified in the lang url parameter) and send it to the component.

        