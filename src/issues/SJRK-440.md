---json
{
  "title": "SJRK-440",
  "summary": "Implement password resetting process",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-12-13T21:12:54.874-0500",
  "updated": "2020-12-13T21:12:55.183-0500",
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
Implement an email-based password resetting feature whereby an author can request an email be sent to the supplied email address.

Assuming the email address is valid, an author account exists for it and the request is made by someone with access to that email account, the email should contain a link that the author can click on. This link will take them to a page which will allow them to supply a new password (along with a confirmation).

Designs may already address this, but if not, consider whether the author should automatically be logged in after resetting their password.

**The user account confirmation process will also be sending emails, and care should be taken to avoid duplicating any code or effort that would/should be shared between these two features.**

        