---json
{
  "title": "INFRA-40",
  "summary": "Implement nginx load balancers",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-08-28T12:25:38.917-0400",
  "updated": "2016-08-22T15:28:37.180-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/INFRA-86/",
      "key": "INFRA-86",
      "summary": "Implement load balancer with HTTPS for all Fluid/IDI websites"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Implement load balancers in front of app, web and micro-services servers.

This layer should be capable of some initial security filtering too against web attacks.

We discussed in the past that Nginx might fill this role instead of HAProxy. Nginx 1.8 has all the load balancing features that we care about (that were only available in Nginx Plus, the paid version). It's a good opportunity to reduce the number of different tools we support and use Nginx at both load balancing, app firewall and static/app servers. It's already the default choice for app/web servers in the new infrastructure.

        