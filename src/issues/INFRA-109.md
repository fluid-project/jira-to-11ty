---json
{
  "title": "INFRA-109",
  "summary": "Network slowness",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-02-02T05:52:33.908-0500",
  "updated": "2018-02-08T09:20:28.464-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-02T05:56:12.829-0500",
      "body": "<https://lists.gpii.net/pipermail/architecture/2018-February/004743.html>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-02T05:56:44.577-0500",
      "body": "```\nStart: Fri Feb 2 10:54:08 2018\r\nHOST: h-0005.tor1.inclusivedesign.ca Loss% Snt Last Avg Best Wrst StDev\r\n 1.|-- gateway 0.0% 60 0.2 0.2 0.1 0.4 0.0\r\n 2.|-- 205.211.169.3 0.0% 60 0.8 3.9 0.4 196.9 25.3\r\n 3.|-- 205.211.168.4 0.0% 60 0.5 0.8 0.4 7.4 1.1\r\n 4.|-- gi0-0-1-17.210.nr11.b011027-0.yyz02.atlas.cogentco.com 0.0% 60 1.3 1.3 1.0 4.0 0.4\r\n 5.|-- 154.24.42.69 0.0% 60 1.2 1.2 0.9 5.0 0.5\r\n 6.|-- te0-0-1-9.ccr31.yyz02.atlas.cogentco.com 0.0% 60 0.9 0.9 0.6 1.3 0.0\r\n 7.|-- level3.yyz02.atlas.cogentco.com 0.0% 60 1.1 1.3 1.0 9.7 1.1\r\n 8.|-- ae-2-4.bear2.Washington111.Level3.net 90.0% 60 18.2 18.2 18.1 18.4 0.0\r\n 9.|-- GITHUB-INC.bear2.Washington111.Level3.net 0.0% 60 18.2 18.2 17.9 21.5 0.5\r\n 10.|-- ??? 100.0 60 0.0 0.0 0.0 0.0 0.0\r\n 11.|-- ??? 100.0 60 0.0 0.0 0.0 0.0 0.0\r\n 12.|-- lb-192-30-253-113-iad.github.com 0.0% 60 18.2 18.3 17.9 28.9 1.4\n```\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-08T09:20:28.447-0500",
      "body": "It seems the packet loss has decreased. It's still not perfect but good enough (seems like how Cogent operates). Closing for now.\n"
    }
  ]
}
---
\-------- Forwarded Message --------\
Subject: Strange network slowness\
Date: Wed, 31 Jan 2018 19:02:05 -0200

Hi all!

We're experiencing some strange network slowness that's causing our CI jobs to fail.

Cloning a repository from GitHub is extremely slow (36KB/s):

$ git clone <https://github.com/GPII/windows>\
Cloning into 'windows'...\
remote: Counting objects: 6394, done.\
remote: Total 6394 (delta 0), reused 0 (delta 0), pack-reused 6394\
Receiving objects: 100% (6394/6394), 36.58 MiB | 36.00 KiB/s, done.\
Resolving deltas: 100% (3103/3103), done.

And a traceroute shows packet loss at Cogentco's point of presence in Toronto:

$ mtr --report-wide --report-cycles=60 github.com\
Start: Wed Jan 31 20:59:59 2018\
HOST: h-0005.tor1.inclusivedesign.ca Loss% Snt Last Avg Best Wrst StDev\
1.|-- gateway 0.0% 60 0.2 0.2 0.1 0.3 0.0\
2.|-- 205.211.169.3 0.0% 60 0.6 0.6 0.4 0.8 0.0\
3.|-- 205.211.168.4 0.0% 60 0.7 0.9 0.6 4.9 0.6\
4.|-- gi0-0-1-17.210.nr11.b011027-0.yyz02.atlas.cogentco.com 16.7% 60 11.4 14.3 6.8 45.2 9.1\
5.|-- 154.24.42.65 16.7% 60 9.9 16.2 7.9 44.0 9.7\
6.|-- te0-0-0-9.ccr31.yyz02.atlas.cogentco.com 6.7% 60 6.1 13.2 6.1 47.4 8.5\
7.|-- level3.yyz02.atlas.cogentco.com 15.0% 60 9.8 14.8 5.5 62.5 10.4\
8.|-- ae-2-4.bear2.Washington111.Level3.net 95.0% 60 27.6 27.8 27.6 28.1 0.0\
9.|-- GITHUB-INC.bear2.Washington111.Level3.net 21.7% 60 25.3 31.2 24.4 65.2 9.6\
10.|-- ??? 100.0 60 0.0 0.0 0.0 0.0 0.0\
11.|-- ??? 100.0 60 0.0 0.0 0.0 0.0 0.0\
12.|-- lb-192-30-253-112-iad.github.com 18.3% 60 31.9 31.8 24.0 80.8 12.2

        