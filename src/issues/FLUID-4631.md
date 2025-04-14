---json
{
  "title": "FLUID-4631",
  "summary": "Argument transmission, specified in a demands block, for events return the wrong value",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2012-03-02T12:54:17.498-0500",
  "updated": "2014-03-03T12:59:52.983-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4631/FLUID-4631.patch",
      "filename": "FLUID-4631.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4631/FLUID-4631b.patch",
      "filename": "FLUID-4631b.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-03-02T13:29:13.302-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-4631#icft=FLUID-4631>.patch adds a unit test to FluidIoCTests.js to show the issue.\n\nI've also put up a branch in my github repo:\\\n<https://github.com/jobara/infusion/tree/FLUID-4631>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-03-05T12:41:51.977-0500",
      "body": "Created a new patch (FLUID-4631b.patch) that has an additional test. This shows that if you remove the first original argument and just leave the second, it will become undefined.\n\nI've also updated the branch in my github repo: \\\n<https://github.com/jobara/infusion/tree/FLUID-4631>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-02-19T14:51:24.133-0500",
      "body": "Resolved by merge of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> branch at revision 91d5d1\n"
    }
  ]
}
---
This one seems to be very specific. When moving the original argument to be the second argument, it returns the new first argument instead of the original argument. There is already a test for the transmission of arguments; however, it seems specific to the case where an event's arguments are being changed through demands.

        