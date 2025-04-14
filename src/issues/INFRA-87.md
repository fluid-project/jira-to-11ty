---json
{
  "title": "INFRA-87",
  "summary": "Enable HTTP/2 for all websites and services behind load balancers",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2016-08-11T13:13:46.886-0400",
  "updated": "2018-01-23T09:05:24.510-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2016-08-11T13:43:53.138-0400",
      "body": "This may not work with HTTPS until CentOS updates OpenSSL to version 1.0.2 at least.\n\n<https://nginx.org/en/docs/http/ngx_http_v2_module.html>\n\n> Note that accepting HTTP/2 connections over TLS requires the “Application-Layer Protocol Negotiation” (ALPN) TLS extension support, which is available only since OpenSSL version 1.0.2. Using the “Next Protocol Negotiation” (NPN) TLS extension for this purpose (available since OpenSSL version 1.0.1) is not guaranteed\n\n.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-21T15:00:14.044-0400",
      "body": "Requires CentOS 7.4 (which now includes newer OpenSSL) and newer nginx packages.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-01-23T09:05:24.502-0500",
      "body": "HTTP/2 has been enabled by default since Nov 2017\n\n<https://github.com/inclusive-design/ops/blob/master/roles/nginx-reverse/templates/endpoint.conf.j2#L37-L41>\n"
    }
  ]
}
---
Research what needs to be changed to support HTTP/2 with out nginx roles.

        