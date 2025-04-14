---json
{
  "title": "INFRA-56",
  "summary": "Create Ansible playbooks for implementing the cluster",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Technical task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Giovanni Tirloni",
  "reporter": "Alan Harnum",
  "date": "2015-11-02T10:47:41.853-0500",
  "updated": "2017-09-21T10:31:30.106-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-21T10:31:30.103-0400",
      "body": "This was created for a demo cluster back in 2015 but we ended up choosing a different solution at the time. Closing ticket to document this and will open new ones for other automation work I'll need to do.\n"
    }
  ]
}
---
As with the rest of our infrastructure, we'll want Ansible playbooks for bringing up the cluster (and eventually, managing it) on CentOS.

There is a set of Ansible playbooks in the 'contrib' repo of the Kubernetes project that may be a useful starting point:\
<https://github.com/kubernetes/contrib/tree/master/ansible>

Our initial staging setup will look like the following:

* 2 masters
* 5 nodes

—

*Comments retained from discussion of Atomic Host*

There are some caveats when using these playbooks with Atomic Host, some of which are detailed at: <http://www.projectatomic.io/blog/2015/09/clustering-atomic-hosts-with-kubernetes-ansible-and-vagrant/>

I've also worked on a set of my own as part of my experimentation: <https://github.com/waharnum/kubernetes-atomic> - this started out as an Ansible-based implementation of the instructions at <http://www.projectatomic.io/docs/gettingstarted/>, but expanded to also configuring DNS, persistent storage and a number of example services and pods

        