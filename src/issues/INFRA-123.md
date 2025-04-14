---json
{
  "title": "INFRA-123",
  "summary": "Private CentOS mirror",
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
  "date": "2018-02-26T10:20:04.984-0500",
  "updated": "2018-03-20T11:23:13.223-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/INFRA-130/",
      "key": "INFRA-130",
      "summary": "Improve yumrepo role"
    },
    {
      "type": "Duplicate",
      "url": "/browse/INFRA-33/",
      "key": "INFRA-33"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-27T13:08:18.475-0500",
      "body": "CentOS 7.x x86\\_64 mirror is available here: <http://mirror.inclusivedesign.ca/centos>\n\nCentOS doesn't use MirrorManager (or it's not clear to find information about that), like Fedora. So adding a private mirror and a netblock isn't possible so the yum repo configuration needs to be managed properly. In Fedora we just continue using the metalink/mirrorlist and let it point users to the right private server.\n\nWorking on this last piece.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-13T16:03:17.118-0400",
      "body": "All CentOS 7.x hosts have been configured to use the private mirror (<https://github.com/inclusive-design/ops/blob/master/environments/00_cross_env_vars#L33-L57>)\n\nFuture improvements:\n\n* Mirror CentOS 6.x for i-0000 (low impact)\n* Manage repo configuration for h-0005 in Ansible (today the automation situation with this host is less than ideal)\n"
    }
  ]
}
---
Private CentOS 7.x mirror for x86\_64 platform.

        