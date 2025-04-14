---json
{
  "title": "INFRA-168",
  "summary": "CI - Snow theme deployment failed",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-04-25T09:08:46.479-0400",
  "updated": "2018-04-27T19:18:47.307-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-27T19:18:40.161-0400",
      "body": "A PR update by Eloisa was deployed correctly (<https://ci.inclusivedesign.ca/blue/organizations/jenkins/website-snow-dev.idrc.ocad.ca-snow_theme/detail/website-snow-dev.idrc.ocad.ca-snow_theme/120/pipeline)>\n\n \n\nThis was caused by enabling SELinux enforcing mode and needed changes in the nginx-static playbook/role.\n"
    }
  ]
}
---
```
ERROR: Exception when publishing, exception message [Failed to connect and initialize SSH connection. Message: [Failed to connect session for config [afe0ab1f_snow-dev.idrc.ocadu.ca]. Message [Auth fail]]]
```

<https://ci.inclusivedesign.ca/blue/organizations/jenkins/website-snow-dev.idrc.ocad.ca-snow_theme/detail/website-snow-dev.idrc.ocad.ca-snow_theme/115/pipeline>

        