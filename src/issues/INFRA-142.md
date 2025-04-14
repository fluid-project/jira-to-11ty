---json
{
  "title": "INFRA-142",
  "summary": "Add Jenkins repo to Ansible config",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-03-17T10:39:42.483-0400",
  "updated": "2018-03-19T09:15:30.721-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-19T09:15:30.682-0400",
      "body": "```\n[root@i-0010 ~]# date\r\nMon Mar 19 13:13:58 UTC 2018\r\n[root@i-0010 ~]# hostname\r\ni-0010.tor1.inclusivedesign.ca\r\n[root@i-0010 ~]# yum repolist\r\nLoaded plugins: fastestmirror\r\nLoading mirror speeds from cached hostfile\r\nrepo id                                                                repo name                                            status\r\nmanaged__centos-base/7/x86_64                                          centos-base                                           9,591\r\nmanaged__centos-extras/7/x86_64                                        centos-extras                                           436\r\nmanaged__centos-updates/7/x86_64                                       centos-updates                                        2,407\r\nmanaged__epel/x86_64                                                   epel                                                 12,423\r\nmanaged__idi/x86_64                                                    idi                                                       4\r\nmanaged__jenkins                                                       jenkins                                                  73\r\nrepolist: 24,934\r\n\r\n[root@i-0012 ~]# date\r\nMon Mar 19 13:14:22 UTC 2018\r\n[root@i-0012 ~]# hostname\r\ni-0012.tor1.inclusivedesign.ca\r\n[root@i-0012 ~]# yum repolist\r\nLoaded plugins: fastestmirror\r\nLoading mirror speeds from cached hostfile\r\nrepo id                                                           repo name                                       status\r\nmanaged__centos-base/7/x86_64                                     centos-base                                      9,591\r\nmanaged__centos-extras/7/x86_64                                   centos-extras                                      436\r\nmanaged__centos-updates/7/x86_64                                  centos-updates                                   2,407\r\nmanaged__epel/x86_64                                              epel                                            12,423\r\nmanaged__idi/x86_64                                               idi                                                  4\r\nmanaged__jenkins                                                  jenkins                                             73\r\nrepolist: 24,934\r\n\r\n# yum check-update\r\nLoaded plugins: fastestmirror\r\nLoading mirror speeds from cached hostfile\r\n\r\njenkins.noarch                            2.107.1-1.1                             managed__jenkins\n```\n"
    }
  ]
}
---
i-0010/i-0011 are missing the Jenkins repo

        