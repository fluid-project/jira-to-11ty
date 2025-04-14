---json
{
  "title": "INFRA-11",
  "summary": "Implement VPN service",
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
  "date": "2015-08-06T08:01:29.203-0400",
  "updated": "2017-09-21T10:28:27.794-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-31T10:59:31.686-0400",
      "body": "I thought maybe a VM with a public IP address running OpenVPN would be OK. OpenVPN could give private IPs to clients and then perform NAT/filter on them, so we don't exhaust our public IPv4 address space.&#x20;\n\nWe could have static private IPs so it's easier to identify who's who (and it should not be a burden to configure because the number of users would be small).\n\nIf we are okay with this approach, I will proceed to the deploy this service. I can test on Linux and Windows 10, but will need help with OS X. Our users will likely need a quick tutorial to go with it.\n"
    },
    {
      "author": "Avtar Gill",
      "date": "2015-09-04T09:34:23.512-0400",
      "body": "Just like with SSH keys, using passphrases on the OpenVPN client provides an additional layer of security. That might buy some time to revoke a compromised certificate if someone's laptop gets stolen or the VPN config is leaked using some other means. What's your opinion regarding a VPN usage policy that enforces the use of passphrases in order to have access to the service?\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-09-04T09:49:26.751-0400",
      "body": "That's a good thing. I'll work on modifying the role for that (to add TLS certificates I believe).\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-21T10:28:27.782-0400",
      "body": "There has not been much need for a VPN service and we are pursuing HTTPS and static websites instead, as a way to decrease the attack surface of our websites.\n"
    }
  ]
}
---
We've discussed a few times that a VPN service would allow our user to have a secure connection to the administrative interface of various service (Wordpress/Drupal admin, etc). It needs to be super simple, work on Mac OS X, Windows and Linux and have easy management.

        