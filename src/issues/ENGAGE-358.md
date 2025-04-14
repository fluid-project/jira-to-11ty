---json
{
  "title": "ENGAGE-358",
  "summary": "Add i18n to description component (MORE... & LESS... strings for toggling)",
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
  "reporter": "y z",
  "date": "2010-02-08T17:27:17.000-0500",
  "updated": "2010-02-12T14:11:13.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2010-02-08T17:27:43.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:40:41.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:40:52.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-12T14:11:13.000-0500",
      "body": "I reviewed and committed Yura's fix for this issue. +1 for inclusion in Engage 0.3b\n"
    }
  ]
}
---
String for the description component need to be internationalized. Currently there are only 2 strings present. However since the description component is only used as a subcomponent of the artifact view, thus the message bundle has to be fetched by the artifact view feed and passed along with the description options in the after map.

        