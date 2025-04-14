---json
{
  "title": "FLUID-6003",
  "summary": "New Infusion builds do not remove old content from builds site",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2016-10-27T14:40:14.729-0400",
  "updated": "2024-07-22T10:35:06.760-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5993/",
      "key": "FLUID-5993",
      "summary": "Conditional adjusters example does not work"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-21T10:44:44.901-0400",
      "body": "There is nothing that can be done with the current Jenkins solutions (without impacting security).\n\nThe move to containers will do away with this issue because content won't be updated in place anymore.\n"
    }
  ]
}
---
The Infusion build on Jenkins is not deleting old content when publishing the resulting files. This is causeing stale content to remain available, which leads to confused users.

The Publish Over SSH plugin does not support removing remote files (see [JENKINS-33056](https://issues.jenkins-ci.org/browse/JENKINS-33056)), even though the Jenkins Job Builder definition lists a "[clean-remote](http://docs.openstack.org/infra/jenkins-job-builder/publishers.html#publishers.ssh)" option. Enabling this option causes the publisher to fail with a null error, when using the latest version of the plugin.

```
SSH: Connecting from host [h-0005.tor1.inclusivedesign.ca]
SSH: Connecting with configuration [build.fluidproject.org] ...
SSH: Creating session: username [4597d990], hostname [build.fluidproject.org], port [7,022]
SSH: Connecting session ...
SSH: Connected
SSH: Opening SFTP channel ...
SSH: SFTP channel open
SSH: Connecting SFTP channel ...
SSH: Connected
SSH: cd [/]
SSH: OK
SSH: cd [/]
SSH: OK
SSH: cd [srv/www/4597d990/infusion]
SSH: OK
SSH: Disconnecting configuration [build.fluidproject.org] ...
ERROR: Exception when publishing, exception message [null]
Build step 'Send build artifacts over SSH' changed build result to FAILURE
Build step 'Send build artifacts over SSH' marked build as failure
Finished: FAILURE
```

        