---json
{
  "title": "INFRA-16",
  "summary": "Move AChecker to its own VM",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-08-07T11:22:58.137-0400",
  "updated": "2015-08-17T13:56:34.689-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-07T11:26:04.494-0400",
      "body": "tor1-prd-app06 has been dedicated to AChecker but there were some problems running it with PHP 5.4.\n\nCindy Li did some work to update the code and it looks much better. However, she still sees some minor differences between when AChecker is running on the old Ubuntu server and when it's running on the new CentOS VM.\n\nWork on this is on hold and AChecker is again running from the Ubuntu server (courseware). That server was stripped down of anythign and only AChecker is running there.\n\nNext step is to point AChecker back to tor1-prd-app06 and work on the remaining code issues.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-17T13:56:34.659-0400",
      "body": "The remaining issues that Cindy has identified were classified as low-priority and will be fixed when she has some free time (no ETA). Since the security of our environment is high-priority, I went ahead and moved AChecker permanently to tor1-prd-app06.\n"
    }
  ]
}
---
From the original GitHub issue (<https://github.com/inclusive-design/ops/issues/44):>

avtar commented on Feb 4, 2014

Greg would like AChecker to be hosted independently from atutor.ca and the courseware VM in general. Requests for this service currently are not rate-limited – we should impose a limit going forward. achecker.ca was issuing too many requests and now can't query the HTML Validator service so we will need to host an instance.

avtar commented on Feb 20, 2014

I'm going to focus on this task on Monday. The goal will be to set up AChecker on a CentOS 6.5 VM and make sure we won't have any issues with the version of PHP shipped with that distribution.

avtar commented on Mar 7, 2014

Potential security incidents were uncovered while working on this task. Here is an email that Cindy sent today:

A new branch for AChecker production

As to our chat yesterday, since the update server for publishing AChecker patches has been moved with Greg and out of our reach, I’ve created a “production” branch in my own AChecker repo for it to be used for the new VM:

<https://github.com/cindyli/AChecker/tree/production>

This branch is a mimic of what's currently in achecker.ca. It’s based off of AChecker 1.3 release tag branch, with patches that had been applied to achecker.ca before and the new patch to fix the current security issue. The new patch has also been merged into the AChecker master branch.

The location of the AChecker internal directory for saving uploaded files

I’ve moved this internal directory in achecker.ca out of the apache document root so it’s no longer accessible by http request. At setting up the new VM, this path will be asked at the AChecker installation.

.htaccess for AChecker production

A .htaccess is added at achecker.ca root directory to redirect all the possible PHP warning and errors to a log file so that these messages don’t show up on the browser to expose script paths. This .htaccess file is more useful for production sites rather than development instances. It’s named as “.htaccess-production” and “readme” is updated with how-to-use steps.

        