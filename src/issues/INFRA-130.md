---json
{
  "title": "INFRA-130",
  "summary": "Improve yumrepo role",
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
  "date": "2018-03-05T08:52:45.994-0500",
  "updated": "2018-03-28T14:15:21.566-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/INFRA-123/",
      "key": "INFRA-123"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-05T14:07:14.633-0500",
      "body": "So I ended up not resurrecting the yumrepo role but instead changed the common role to accept a list of yum repositories (and the ability to enforce that only those exist).\n\nThe yumrepo role had a mapping of all the parameters accepted by the yum\\_repository module. This was fragile and hard to maintain (no way to know when changes should be made to keep in sync besides look every other while).\n\nThe common role only accepts name, baseurl, gpgcheck, gpgkey and exclude parameters. Those are the only parameters in use by IDRC servers at the moment. If a new parameter needs to be accepted, the common role\\`s tasks/main.yml file can be changed to accommodate that and we avoid overengineering.\n\nI've elected the following repositories as being global/basic for our infrastructure: CentOS-Base, CentOS-Updates, CentOS-Extras, EPEL and our own IDI repo. If a host or group needs to modify this list, it should be completely redefined (that is, include all these repos plus the additional ones) in the appropriate host\\_vars/group\\_vars file. Unfortunately, Ansible throws a \"loop detected\" error if you try to re-use the common\\_yum\\_repositories variables to specialize it in a host\\_vars/group\\_vars file so we're left with duplicated code (but that should be rare). I've left out the Prometheus repo even though it could be considered one of the basic repos because there's some automation work left to do on it (actually, a lot).\n\nThe repo definitions can be found here: <https://github.com/inclusive-design/ops/commit/20b592962afe3bac66b46c166889f7db3c8c6601>\n\nI'll work on applying the common role to all servers and making sure the repositories are defined correctly for each subset now.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-28T14:15:21.564-0400",
      "body": "Configuration applied to all hosts.\n"
    }
  ]
}
---
The yumrepo role was used in the past to specify a definitive list of Yum repositories. It was retired because it was cumbersome to keep track of official repositories and it didn't provide much value at the time.

With the introduction of private Mirrors (see INFRA-123), it makes sense to use it again. The only downside is that it's not very idempotent and some work needs to be done to improve that. Ideally, the role should remove everything that is not specified in host\_vars/group\_vars.

It also needs to be tested with Molecule and pass basic tests.

        