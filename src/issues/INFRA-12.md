---json
{
  "title": "INFRA-12",
  "summary": "Implement Out-Of-Band management gateway server",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-08-06T08:07:14.482-0400",
  "updated": "2017-09-21T10:29:20.210-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-21T10:29:20.207-0400",
      "body": "This remained a low priority for a long time and it requires dedicated staff on site to carry it on.\n"
    }
  ]
}
---
Exposing the IPMI/DRAC interfaces to the public Internet is a big no-no due to the fact that these services do not get the same level of attention by vendors when it comes to security updates (or updates in general).

We have some servers that should be reachable remotely through their IPMI/DRAC interfaces if they fail. Yet, they are responsible for all incoming networking and it becomes a chicken-and-egg problem. We need to access the firewall's IPMI interface, but if that interface is sitting behind the firewall, then it's not accessible at all.

An idea that was proposed was to dedicate a server to be a sort of IPMI/DRAC gateway. It should be extremely restricted, have SELinux enabled, possibly implement port knocking, etc. Administrators would login to it and then setup SSH tunnels as needed to the various IPMI/DRAC ports.

We currently have a dedicated network for IPMI/DRAC traffic running on a Dell 1GbE switch. Network 10.0.0.0/24 is used for Administrative access and network 172.16.12.0/24 for out-of-band management.

This server would need to be in front of the firewall, that is, connected directly to OCAD's switch/router and have a public IP on its WAN interface. The LAN interface would be connected to the Dell switch and have IPs on both ADM and OOB networks.

        