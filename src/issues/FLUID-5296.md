---json
{
  "title": "FLUID-5296",
  "summary": "The tabs in the clear fix demo don't work",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2014-03-26T10:32:44.099-0400",
  "updated": "2015-06-26T09:52:28.336-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Demos",
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-03-26T14:55:02.337-0400",
      "body": "We will likely be removing FSS before we get to actually fixing this.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:26.104-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:43.961-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The tabs used in the clear fix demo don't work.&#x20;

Steps to reproduce:

1\) Open the FSS clearFix demo

2\) click one of the tabs in the demo

2\) notice that the tab doesn't open. There are no errors reported either.

        