---json
{
  "title": "INFRA-18",
  "summary": "Update Fluid's JIRA license",
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
  "date": "2015-08-17T10:38:08.850-0400",
  "updated": "2015-08-17T21:16:17.650-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-17T21:16:17.648-0400",
      "body": "Updated.\n\nOrganization \tThe FLUID Project\\\nDate Purchased \t29/Apr/16\\\nLicense Type \tJIRA (Server) 10000 Users: Open Source License\\\n(Support and updates available until 29/Apr/17)\\\nServer ID \tA0Z4-9USX-OFP1-8OVX\\\nSupport Entitlement Number (SEN) \tSEN-133444\\\nUser Limit \t10000 (179 currently active)\n"
    }
  ]
}
---
There is a new key for SEN-133444 that needs to be applied. Without this, any data exports will not be able to be imported into JIRA 6.x

Will require JIRA restart.

        