---json
{
  "title": "FLUID-4226",
  "summary": "FluidIoC Framework unit test #24 fails on Chrome, IE 8, 9 ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Harris Wong",
  "date": "2011-05-11T13:25:23.516-0400",
  "updated": "2011-06-14T10:01:01.014-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": "Chrome 11.0.696.65 on Windows 7\\\nIE 8, 9 on Windows 7\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4226/4226-ss1.png",
      "filename": "4226-ss1.png"
    }
  ],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-05-11T13:38:55.087-0400",
      "body": "Screenshot 4226-ss1.png attached for a sample of the failure\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:06:27.770-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-05-18T15:05:28.368-0400",
      "body": "Tested by harriswong on the various platforms, no longer occurring &#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-06-14T10:01:01.012-0400",
      "body": "I also tried this again on IE 9 Win XP and couldn't reproduce it.\n"
    }
  ]
}
---
Framework's FluidIoC Unit test #24 fails on Chrome and IE 8/9.

Steps to reproduce:\
1\. Go to <http://build.fluidproject.org/infusion/tests/framework-tests/core/html/FluidIoC-test.html> with Chrome or IE 8,9.

        