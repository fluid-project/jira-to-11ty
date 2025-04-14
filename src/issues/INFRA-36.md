---json
{
  "title": "INFRA-36",
  "summary": "Ansible role: website",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-08-24T10:40:47.778-0400",
  "updated": "2016-08-23T09:44:30.489-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-27T09:14:15.062-0400",
      "body": "I thought this was urgent because one website we host needs HTTPS by default (wiki.gpii.net), but it turns out that TLS is terminated at the load balancer (HAProxy), so nginx doesn't need to serve HTTPS. /me breathes\n"
    }
  ]
}
---
Today we have 'phpsite' (PHP) and 'staticsite' (static/redirect) roles. It seems possible to combine them into a single 'website' role that would support:

* PHP, static and redirects
* HTTPS
* Various PHP sub-types (Drupal, Wordpress, etc)

After phpsite and staticsite were used extensively, the corner cases got addressed and there's a better understanding of what is required. So a refactor seems doable now.

        