---json
{
  "title": "INFRA-85",
  "summary": "Automate Let's Encrypt certificate renewal process",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Alan Harnum",
  "date": "2016-07-19T09:55:24.567-0400",
  "updated": "2017-09-03T14:11:30.894-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/INFRA-86/",
      "key": "INFRA-86"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-03T14:11:30.880-0400",
      "body": "IDI assets are using Let's Encrypt with DNS validation.\n\n<https://github.com/idi-ops/ansible-letsencrypt-route53>\\\n<https://github.com/inclusive-design/ops/blob/master/ansible/host_vars/i-0040.tor1.inclusivedesign.ca>\n"
    }
  ]
}
---
Per @@Giovanni Tirloni's recent email about the issues we were having with the OwnCloud instance, we should have a playbook to capture the cert renewal process with Let's Encrypt:

```
Let’s Encrypt was having issues renewing certificates for the past few days. Errors like this:
 
Detail: DNS problem: networking error looking up A for
   files.inclusivedesign.ca
 
Detail: DNS problem: networking error looking up CAA for
   files.inclusivedesign.ca
 
I kept retrying it today until it worked. This is the command that I used:
 
letsencrypt certonly --standalone -d files.inclusivedesign.ca --standalone-supported-challenges http-01 --http-01-port 80 --renew-by-default --email gtirloni@ocadu.ca --agree-tos
 
It would be great to somehow have this in Ansible but I haven’t had the time to focus on this yet.
```

        