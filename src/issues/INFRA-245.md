---json
{
  "title": "INFRA-245",
  "summary": "Update certbot to use ACMEv2 protocol",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2020-05-02T10:00:29.760-0400",
  "updated": "2020-05-04T10:07:24.532-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-05-04T10:06:47.631-0400",
      "body": "Old versions:\n\n```\ncertbot (0.17.0)\r\ncertbot-dns-route53 (0.17.0)\r\ncertbot-route53 (0.2.0)\n```\n\nNew versions:\n\n```\ncertbot (1.3.0)\r\ncertbot-dns-route53 (1.3.0)\r\ncertbot-route53 (0.2.0)\n```\n\nSuccessful job run:\n\n```\n+ ansible-playbook -i environments/production playbooks/letsencrypt_renew.yml\r\n\r\nPLAY [Rewew existing Let's Encrypt certificates] *******************************\r\n\r\nTASK [Gathering Facts] *********************************************************\r\nok: [i-0023.tor1.incd.ca]\r\n\r\nTASK [letsencrypt-route53 : Check if action is valid] **************************\r\nskipping: [i-0023.tor1.incd.ca]\r\n\r\nTASK [letsencrypt-route53 : Include tasks] *************************************\r\nincluded: /home/deploy/workspace/infra-letsencrypt-renew/roles/letsencrypt-route53/tasks/renew.yml for i-0023.tor1.incd.ca\r\n\r\nTASK [letsencrypt-route53 : Renew certificates] ********************************\r\nok: [i-0023.tor1.incd.ca]\r\n\r\nPLAY RECAP *********************************************************************\r\ni-0023.tor1.incd.ca        : ok=3    changed=0    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0   \r\n\r\nTriggering a new build of infra-letsencrypt-deploy\r\nFinished: SUCCESS\n```\n"
    }
  ]
}
---
```
From: <noreply@letsencrypt.org>
Date: Sat, May 2, 2020 at 5:53 AM
Subject: Update your client software to continue using Let's Encrypt

Hi,

According to our records, the software client you're using to get Let's 
Encrypt TLS/SSL certificates issued or renewed at least one HTTPS certificate 
in the past two weeks using the ACMEv1 protocol. Here are the details of one 
recent ACMEv1 request from each of your account(s):

Client IP address:  205.211.169.36 

User agent:  CertbotACMEClient/0.17.0 (certbot; CentOS Linux 7 (Core)) Authenticator/dns-route53 Installer/None (certonly; flags: n) Py/2.7.5 

Hostname(s):  "inclusivedesign.ca","airmedia.inclusivedesign.ca","ci.inclusivedesign.ca","files.inclusivedesign.ca","guide.inclusivedesign.ca","hackathon.inclusivedesign.ca","lists.inclusivedesign.ca","pkg.inclusivedesign.ca","www.inclusivedesign.ca","aihec.inclusivedesign.ca","cities.inclusivedesign.ca","stories.cities.inclusivedesign.ca","wecount.inclusivedesign.ca","wecount-cms.inclusivedesign.ca","wecount-dev.inclusivedesign.ca" 

Request time:  2020-04-14 20:00:38 UTC 

Beginning June 1, 2020, we will stop allowing new domains to validate using 
the ACMEv1 protocol. You should upgrade to an ACMEv2 compatible client before 
then, or certificate issuance will fail. For most people, simply upgrading to 
the latest version of your existing client will suffice. You can view the 
client list at: https://letsencrypt.org/docs/client-options/

If you're unsure how your certificate is managed, get in touch with the 
person who installed the certificate for you. If you don't know who to 
contact, please view the help section in our community forum at 
https://community.letsencrypt.org/c/help and use the search bar to check if 
there's an existing solution for your question. If there isn't, please create 
a new topic and fill out the help template.

ACMEv1 API deprecation details can be found in our community forum: 
https://community.letsencrypt.org/t/end-of-life-plan-for-acmev1

As a reminder: In the future, Let's Encrypt will be performing multiple 
domain validation requests for each domain name when you issue a certificate. 
While you're working on migrating to ACMEv2, please check that your system 
configuration will not block validation requests made by new Let's Encrypt IP 
addresses, or block multiple matching requests. Per our FAQ 
(https://letsencrypt.org/docs/faq/), we don't publish a list of IP addresses 
we use to validate, and this list may change at any time.

To receive more frequent updates, subscribe to our API Announcements: 
https://community.letsencrypt.org/t/about-the-api-announcements-category 

Thank you for joining us on our mission to create a more secure and privacy-
respecting Web!

All the best,

Let's Encrypt
```

        