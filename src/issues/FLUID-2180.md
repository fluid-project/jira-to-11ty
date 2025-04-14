---json
{
  "title": "FLUID-2180",
  "summary": "Upgrade Fluid to latest jQuery (1.3.1)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Antranig Basman",
  "date": "2009-02-02T17:32:26.000-0500",
  "updated": "2009-02-16T22:38:49.000-0500",
  "versions": [
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-02-02T17:46:58.000-0500",
      "body": "This is complete at revision 6399. I have verified all of the test cases on Firefox, and tried a reasonable spread of manual test cases - the upgrade looks extremely seamless with no problems found. Over to Justin for more detailed bashing...\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-03T10:42:01.000-0500",
      "body": "I'm assigning any issue that I find as a sub-issue\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-11T14:03:38.000-0500",
      "body": "build scripts not updates\n\nBug Parade 0.8 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-11T14:14:04.000-0500",
      "body": "Build script updated, Fluid-all.js is working now.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-16T21:46:31.000-0500",
      "body": "I reviewed Anastasia's one-line update to build.properties at r6486 and it is correct. +1 for inclusion in Infusion 0.8.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-16T22:38:49.000-0500",
      "body": "uPortal demo pulled from uPortal trunk appears to be working\n"
    }
  ]
}
---
This will also require an upgrade of our JQuery UI files to the latest (unstable) release 1.6rc6. This seems reasonable since we expect JQuery ui 1.6 final in a very short timeframe - this may even give us a chance to feed back any last-minute issues we discover up to their team.&#x20;

        