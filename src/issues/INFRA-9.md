---json
{
  "title": "INFRA-9",
  "summary": "Implement tighter security for SSH access",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Won't Do",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-08-04T15:02:09.806-0400",
  "updated": "2017-09-21T10:56:03.609-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-09-04T10:16:27.611-0400",
      "body": "Created SSH servers tor1-prd-ssh01 and tor1-prd-ssh02. Address \"ssh.inclusivedesign.ca\" points at both (round-robin).\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-01-13T11:35:53.544-0500",
      "body": "These boxes were terminated a while ago because of performance issues at the time that were making Ansible very unstable. We should re-implement this.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-21T10:56:03.607-0400",
      "body": "SSH access is restricted at the firewall (requires authentication by trusted user to update firewall rules and allowing src IP of the user).\n"
    }
  ]
}
---
Today we have inconsistent SSH access: some servers allow connections from the outside, others don't and some only from the IDRC network.

The goal is to restrict SSH access so connections are only accepted from a few bastion hosts.

An intermediate step is to restrict SSH access so only connections coming from the IDRC network are accepted. Later it can be restricted further to only the bastion hosts.

Initial tasks:

* Modify iptables rules to allow SSH only from 205.211.169.0/24 (through Ansible group\_vars)
* Deploy bastion hosts (ssh01 and ssh02)

        