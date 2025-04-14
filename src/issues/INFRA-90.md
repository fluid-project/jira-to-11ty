---json
{
  "title": "INFRA-90",
  "summary": "Review all websites for .git directories",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2017-07-08T07:58:56.316-0400",
  "updated": "2017-09-21T10:33:23.090-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-21T10:33:23.087-0400",
      "body": "Rules have been added to Nginx site configuration to protect these directories.\n\n<https://github.com/idi-ops/ansible-nginx-php/blob/master/templates/nginx/wordpress.conf.j2#L30-L32>\n\n<https://github.com/idi-ops/ansible-nginx-static/blob/master/templates/generic.conf.j2#L41-L43>\n"
    }
  ]
}
---
Best practices says .git directories should be protected unless we have a good reason to make them public.

This is not so critical for us because all our projects are open source and we don't store confidential information in git repositories.

        