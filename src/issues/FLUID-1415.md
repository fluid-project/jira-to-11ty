---json
{
  "title": "FLUID-1415",
  "summary": "OSDPL Functionality: Implement security measures for comments and registration",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-09-03T10:33:32.000-0400",
  "updated": "2008-09-09T11:34:34.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-09-03T10:33:41.000-0400",
      "body": "Iteration17\n"
    }
  ]
}
---
Implement basic security features for comments and user registration.

* Creating comments do not require a user account, therefore a security measure should be in place like a captcha or obvious password.

- User registration should use a captcha or similar verification system to prevent phony user accounts.

        