---json
{
  "title": "INFRA-45",
  "summary": "Allow certain services between PVLANs",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-09-17T16:20:32.600-0400",
  "updated": "2016-08-22T15:40:30.395-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-09-17T16:27:24.629-0400",
      "body": "One solution is to carve a /28 or /29 out of the /24, just for Vidyo. One problem is that our IP address space is scattered, but this will improve when we shutdown Nebula. The other problem is that the IPs being used by Vidyo today fall outside the nearest /28 (205.211.169.57 to .62). We would need to reconfigure the appliances and fix DNS. It would be even better to relocate them to the top of the address space within a /29 (e.g. 205.211.169.248/29).\n\nAnother solution is to get rid of the PVLAN, let the Vidyo appliances into the same general VLAN as all other servers. It would still be possible to isolate them through access lists in Arista.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2016-08-22T09:09:22.305-0400",
      "body": "The solution adopted as to remove PVLANs and get all our servers on the same VLAN. It is assumed the Vidyo servers won't pose any greater risk than our own servers, and they are the only 3rd-party devices in our network.\n"
    }
  ]
}
---
Today we have the following PVLANs:

tor1-prd-sw01#show vlan private-vlan \
Primary Secondary Type        Ports\
\------- --------- ----------- -------------------------------\
10      12        community   Et17, Et33, Et34, Et39, Et40\
Et41, Et42, Et43, Et47, Et48\
Po10, Po20, Po30, Po40, Po50\
Po60\
10      13        community   Et17, Et33, Et34, Et47, Et48\
Po10, Po20, Po30, Po40, Po50\
Po60\
10      11        community   Et17, Et33, Et34, Et47, Et48\
Po10, Po20, Po30, Po40, Po50\
Po60

The hosts on these PVLANs can communicate with each other and the Internet, but not with hosts on other PVLANs.

This creates a problem for hosts that want to use services like the central logging and internal MX servers. The communication is blocked as no routing is allowed (hosts get "no route to host" error).

If each PVLAN had its own network (e.g. a /29 inside the /24), then routing would take care of it. Hosts A on PVLAN 1 would see that Host B is not in the local network and would reach out to the gateway (205.211.169.1), which would send the traffic to the appropriate hosts. However, all servers are configured with a /24 netmask. So the Vidyo appliances keep trying to find the central logging server on their PVLAN unsuccessfully.

We need a way to allow certain service to bypass these restrictions.

        