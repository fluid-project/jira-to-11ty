---json
{
  "title": "ENGAGE-339",
  "summary": "The My Collection unit tests are failing",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Colin Clark",
  "date": "2010-02-08T13:18:32.000-0500",
  "updated": "2014-03-03T14:12:49.581-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-339/ENGAGE-339.patch",
      "filename": "ENGAGE-339.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-339/ENGAGE-339.txt",
      "filename": "ENGAGE-339.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-339/ENGAGE-339-2.patch",
      "filename": "ENGAGE-339-2.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-08T16:24:17.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-17T09:27:44.000-0500",
      "body": "Patch <https://fluidproject.atlassian.net/browse/ENGAGE-339#icft=ENGAGE-339>: fixes My Collection tests. The test for navigation bar will fail until <http://issues.fluidproject.org/secure/attachment/10976/ENGAGE-154.patch> is applied.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-17T10:38:55.000-0500",
      "body": "I committed Sveto's fix for this issue at r9420.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-17T10:39:13.000-0500",
      "body": "Reviewed and committed. +1 for inclusion in Engage 0.3b\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-19T00:23:10.000-0500",
      "body": "Sveto, it looks like the My Collection unit tests are failing again, caused by the addition of the Save dialog box or other feature.\n\nApologies again for committing code with breaking tests, but I thinking these probably broke sometime between your patch and Justin and Yura's modification to it.\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-19T08:20:52.000-0500",
      "body": "Added ENGAGE-339-2.patch that does no more than to replace an include in the test markup.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-02T10:04:56.000-0500",
      "body": "Committed Sveto's patch ENGAGE-339-2.patch that fixes the broken MyCollection unit tests by fixing up the script imports.\n"
    },
    {
      "author": "y z",
      "date": "2010-03-31T11:09:33.000-0400",
      "body": "My collection tests are failing again due to the update to demo data that's used for standalone viewing/testing.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-31T11:26:12.000-0400",
      "body": "Committed Yura's patch <https://fluidproject.atlassian.net/browse/ENGAGE-339#icft=ENGAGE-339>.txt, which fixes the broken test. Basically the local data was changed to be the options for the component rather than just the model. The patch updates the tests to reflect this.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-04-07T17:53:40.000-0400",
      "body": "I'm getting an error when I try to run the tests: \"module is not defined\" on line 323 of jqUnit\n"
    }
  ]
}
---
A handful of My Collection unit tests are currently failing, including ones related to construction and the Reorderer.

        