---json
{
  "title": "FLUID-3822",
  "summary": "Update the Pager demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Jonathan Hung",
  "date": "2010-11-03T12:23:54.880-0400",
  "updated": "2014-03-03T12:07:15.338-0500",
  "versions": [
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Demos",
    "Pager"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3580/",
      "key": "FLUID-3580",
      "summary": "Pager demo has invalid markup"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3600/",
      "key": "FLUID-3600",
      "summary": "Pager demo markup has errors when testing with AChecker."
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3822/FLUID-3822.patch.js-1.txt",
      "filename": "FLUID-3822.patch.js-1.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3822/FLUID-3822.patch.sortable-columns.txt",
      "filename": "FLUID-3822.patch.sortable-columns.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-04T09:28:27.618-0400",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-04T09:51:09.725-0400",
      "body": "Attached draft design.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-04T12:03:22.993-0400",
      "body": "Updated draft\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-11-09T17:16:29.331-0500",
      "body": "This patch (<https://fluidproject.atlassian.net/browse/FLUID-3822#icft=FLUID-3822>.patch.sortable-columns.txt) is a first pass at adding sortable columns to the demo. It works, technically, but it's still doing some things it shouldn't do. Still needs work.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-11-12T11:51:04.790-0500",
      "body": "\"FLUID-3822.patch.js-1.txt\" does:&#x20;\n\n1\\. moved the js functions from \"sakai\" name space to \"demo\";\\\n2\\. make \"email\" column sortable;\\\n3\\. fix errors from JSLint&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-13T15:27:51.129-0500",
      "body": "Reviewed by Heidi Valles and Jonathan Hung using\n\n* Win7 IE8, FF3.6, NVDA 2010.2\n* Mac FF, Safari with  voice over&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-13T15:31:59.180-0500",
      "body": "Done.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-14T11:42:26.353-0500",
      "body": "Functionally reviewed by Mike, awaiting code review from Antranig.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-10T14:33:41.977-0500",
      "body": "The demo implemented for 1.3 addresses these issues.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-03-03T16:42:45.295-0500",
      "body": "Changed the \"Affect Version\" to 1.3.1.\n"
    }
  ]
}
---
Create a new pager demo that provides better context and shows off some of the new features of pager (i.e. gapped paging, and annotations).

        