---json
{
  "title": "INFRA-150",
  "summary": "PackageKit uses >250MB RSS memory on Fedora 27 box",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-03-30T18:00:26.880-0400",
  "updated": "2018-03-30T20:05:26.284-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-30T19:30:06.118-0400",
      "body": "Released Fedora 27 v20180330 with PackageKit disabled.\n\nTested on fluid-project/infusion and GPII/universal successfully.\n"
    }
  ]
}
---
```
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root      1389  2.4 12.6 998312 257596 ?       Ssl  21:18   0:43 /usr/libexec/packagekitd
```

PackageKit is responsible for managing installing / updating new software, especially through the desktop environment.

It's usually not necessary in the Vagrant box because we provide updated boxes regularly. Besides that, if users are changing the development environment that creates problems for CI as there's undesired configuration drift.

The Fedora vagrant box is configured by default with a 2GB memory limit.

        