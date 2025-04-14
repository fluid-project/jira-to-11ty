---json
{
  "title": "SJRK-439",
  "summary": "Implement email confirmation process on sign-up",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-12-13T21:08:15.150-0500",
  "updated": "2020-12-13T21:13:41.334-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-405/",
      "key": "SJRK-405",
      "summary": "Implement server side logic for signup/login/logout and session support"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Implement an email-based author account confirmation system which is used to confirm the supplied email address is valid and accessible by the person signing up.

**The password reset process will also be sending emails, and care should be taken to avoid duplicating any code or effort that would/should be shared between these two features.**

        