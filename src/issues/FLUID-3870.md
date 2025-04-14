---json
{
  "title": "FLUID-3870",
  "summary": "Redesign the grid reorderer demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Jonathan Hung",
  "date": "2010-12-01T11:09:05.571-0500",
  "updated": "2010-12-09T12:51:58.008-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3870/FLUID-3870.patch",
      "filename": "FLUID-3870.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3870/FLUID-3870-2.patch",
      "filename": "FLUID-3870-2.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3870/FLUID-3870-3.patch",
      "filename": "FLUID-3870-3.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3870/FLUID-3870-4.patch",
      "filename": "FLUID-3870-4.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3870/FLUID-3870-5.patch",
      "filename": "FLUID-3870-5.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3870/FLUID-3870-6.patch",
      "filename": "FLUID-3870-6.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3870/FLUID-3870-7.patch",
      "filename": "FLUID-3870-7.patch"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-12-01T11:09:25.091-0500",
      "body": "The design is to be finalized. Should be done very soon!\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-01T17:05:14.304-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-12-03T10:41:23.203-0500",
      "body": "Grid reorderer changes - please review Jon!\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-06T10:21:00.453-0500",
      "body": "Simplified.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-06T10:25:16.312-0500",
      "body": "Simplified.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-06T10:26:33.418-0500",
      "body": "Patch-4 attached. Review please.\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-12-06T12:43:42.982-0500",
      "body": "Re: patch 4 I've noticed a few things on IE8: &#x20;\n\n-the moveable pointer doesn't happen on selected items\\\n-when clicking on the whitespace of an unselected item, the entire grid gets a black outline\\\n-when tabbing to the grid, an outline around the grid flashes\\\n-also a black line along the bottom of the page when tabbing out of the grid\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-06T15:24:18.107-0500",
      "body": "Fixed problems in IE8: unable to select items, black lines.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-06T16:22:09.859-0500",
      "body": "Patch-6 successfully passed initial testing. Please review.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-07T16:30:15.903-0500",
      "body": "Review patch-6 please.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-08T10:43:03.416-0500",
      "body": "I think it would be better to change the markup to not use a 'ul' since this demo isn't semantically a list.&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-08T14:46:17.679-0500",
      "body": "Switched from reorderable List to DIVs.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-09T10:41:29.604-0500",
      "body": "Please review patch 7.\n"
    }
  ]
}
---
Redesign the grid reorderer to be a alphabet sorter.

* Replace the words with a random order of letters.
* Add a title and instruction directing the user what to do (perhaps the title "Letter Sorter" and the instruction text "Re-arrange the letters into alphabetical order."
* Add keyboard instruction text similar to that seen in Layout reorderer.

        