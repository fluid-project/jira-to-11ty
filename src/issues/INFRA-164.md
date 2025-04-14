---json
{
  "title": "INFRA-164",
  "summary": "Ansible 2.5 - Using tests as filters is deprecated",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-04-16T18:34:16.996-0400",
  "updated": "2018-04-27T19:31:34.106-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-27T19:31:34.102-0400",
      "body": "I believe I've fixed all warnings related to this issue. If any new one shows up, I'll reopen.\n"
    }
  ]
}
---
Find and fix these warnings:

```
[DEPRECATION WARNING]: Using tests as filters is deprecated. Instead of using 
`result|search` instead use `result is search`. This feature will be removed in
 version 2.9. Deprecation warnings can be disabled by setting 
deprecation_warnings=False in ansible.cfg.
```

        