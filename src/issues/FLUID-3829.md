---json
{
  "title": "FLUID-3829",
  "summary": "Provide a different message for the page link which are non-clickable or the visiting page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Golam Chowdhury",
  "date": "2010-11-09T12:31:32.140-0500",
  "updated": "2014-03-03T13:40:44.109-0500",
  "versions": [
    "1.2.1",
    "1.3.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Pager"
  ],
  "environment": "WinXP:\\\nChrome4\\\nFirefox3.6\\\nFirefox3.0\\\nIE8.0\\\nIE7.0\\\nIE6.0\n\nWin7:\\\nFirefox3.6\\\nIE8.0&#x20;\n\nMac10.5:\\\nSafari 4\n\nMac10.6:\\\nFirefox3.6\\\nSafari 4\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3829/FLUID-3828-AND-3829.patch",
      "filename": "FLUID-3828-AND-3829.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-10T09:49:53.458-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-11T12:37:26.702-0500",
      "body": "Updated description\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-11T12:44:18.476-0500",
      "body": "FLUID-3828-AND-3829.patch contains the fix for providing better feedback to the user using screen readers. Note: this is not the final patch and this patch was provided to help designers test the pager component.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-13T16:36:25.429-0500",
      "body": "It seems that some part of the merge from the AEGIS branch didn't make it, or has been regressed since: The goal was to change the 'current page' so that it was NOT a link. This works in the branch, but not in trunk: trunk still reads \"link\" when focus lands on the current page button.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-13T16:56:56.210-0500",
      "body": "Discussion in the channel (<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2010-12-13>) reveals that for now, we'll leave it speaking \"link\".\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-03-03T16:41:33.213-0500",
      "body": "Changed the \"Affect Version\" to 1.3.1.\n"
    }
  ]
}
---
The current page is read as a link, but it's not activatable.

The fix: remove link from current page

Question: will users be confused if they can't hear the current page when navigating the page links? same with ellipses?

        