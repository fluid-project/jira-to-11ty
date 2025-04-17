---json
{
  "title": "INFRA-8",
  "summary": "Enhance logging infrastructure",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Alan Harnum",
  "reporter": "Giovanni Tirloni",
  "date": "2015-08-03T17:40:12.208-0400",
  "updated": "2018-01-23T09:11:21.170-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2015-08-07T10:19:38.910-0400",
      "body": "Avtar and I were discussing this yesterday and were wondering what the thoughts of others were about deploying this as a separate service (ELK stack or similar, with Logstash Forwarder or other pieces in place on the central logging servers) on Kubernetes.\n\nIt seemed plausible to us both that since this would be a brand new service it would be an opportunity to trial-run Kubernetes.\n\nTo that end I'm looking into the containerization options for running the ELK stack along with various other things.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-01-23T09:11:21.170-0500",
      "body": "Alan Harnum is it okay if we close this Jira and open a new one specifically for ELK? I can do that if you think that's okay.\n"
    }
  ]
}
---
All new servers are logging to our central logging servers (tor1-prd-log01 and log02). This is running on rsyslog (clients and servers) and writing to traditional text files (see /var/log/hosts).

We need to complement this with additional tools like a web interface to logs, search capabilities, etc, so end users (developers) can run queries against logs.

        