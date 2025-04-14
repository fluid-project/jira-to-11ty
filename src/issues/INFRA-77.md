---json
{
  "title": "INFRA-77",
  "summary": "iptables roles should be friendly to docker/kubernetes rules",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "Giovanni Tirloni",
  "reporter": "Alan Harnum",
  "date": "2015-12-17T11:27:57.353-0500",
  "updated": "2017-01-13T11:18:20.967-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-01-13T11:14:44.757-0500",
      "body": "A common pattern when working with cloud providers seem to be to block by default at the firewall/network level and leave the VMs free to talk to each other within the internal network. We achieve this today by having a pfSense firewall in front of all our traffic (much like someone would go into AWS' dashboard and add a few rules to allow some traffic in).\n\nI'm thinking the downside of managing IPTables on each VM outweights the perceived benefits to which my suggestion is to drop IPTables on the VMs altogether. Some facts that make me think this is doable are: we don't allow SSH access to our servers, exec access is disable for PHP application, SELinux is enabled and all VMs are behind the firewall.\n\nAll of this is to say I think making the iptables role smarter is going to be a lot of work. If we are moving to a environment where all apps/websites run in a container inside a Kubernetes cluster (or some PaaS solution), then the orchestration layer already has filtering capabilities in place (K8S doesn't expose containers/pods, it requires a service definition so the port is explicitly specified).\n\nIn a more traditional environment (like ours, currently) it seems the iptables role has good capabilities (since we only identified the drawback when we started to use Docker, which is exposed to be the default mode of operation in the near future).\n\nWould it be okay to close this ticket for the reasons mentioned above?\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-01-13T11:18:12.337-0500",
      "body": "Yes, this sounds fine - let's close this issue for now.\n"
    }
  ]
}
---
The iptables roles currently builds a ruleset from scratch and erases everything that was previously defined. This creates a problem for Docker/Kubernetes rules that are added dynamically, thus not defined in the iptables\_rules list.

        