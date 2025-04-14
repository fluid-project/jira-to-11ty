---json
{
  "title": "SJRK-458",
  "summary": "Node.js v14.16.0 (LTS)",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2021-03-03T13:07:03.698-0500",
  "updated": "2021-03-16T16:55:31.500-0400",
  "versions": [],
  "fixVersions": [
    "0.5.1"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-03-16T16:48:30.014-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/sjrk-story-telling/pull/115> ) into the project repo at dc8379451a9e80596337f70ca883bb85cdb5e4bc\n"
    }
  ]
}
---
<https://nodejs.org/en/blog/release/v14.16.0/>

Vulnerabilities fixed:

CVE-2021-22883: HTTP2 'unknownProtocol' cause Denial of Service by resource exhaustion\
Affected Node.js versions are vulnerable to denial of service attacks when too many connection attempts with an 'unknownProtocol' are established. This leads to a leak of file descriptors. If a file descriptor limit is configured on the system, then the server is unable to accept new connections and prevent the process also from opening, e.g. a file. If no file descriptor limit is configured, then this lead to an excessive memory usage and cause the system to run out of memory.\
CVE-2021-22884: DNS rebinding in --inspect\
Affected Node.js versions are vulnerable to denial of service attacks when the whitelist includes “localhost6”. When “localhost6” is not present in /etc/hosts, it is just an ordinary domain that is resolved via DNS, i.e., over network. If the attacker controls the victim's DNS server or can spoof its responses, the DNS rebinding protection can be bypassed by using the “localhost6” domain. As long as the attacker uses the “localhost6” domain, they can still apply the attack described in CVE-2018-7160.\
CVE-2021-23840: OpenSSL - Integer overflow in CipherUpdate\
This is a vulnerability in OpenSSL which may be exploited through Node.js. You can read more about it in <https://www.openssl.org/news/secadv/20210216.txt>

        