---json
{
  "title": "ENGAGE-142",
  "summary": "title extends over multiple lines",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Laurel Williams",
  "date": "2009-10-21T12:29:35.000-0400",
  "updated": "2010-02-22T17:20:24.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Navigation Bar"
  ],
  "environment": "IPhone\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-142/navBar.txt",
      "filename": "navBar.txt"
    }
  ],
  "comments": [
    {
      "author": "Tona Monjo",
      "date": "2009-10-21T15:53:53.000-0400",
      "body": "I've also found the same bug on my iPhone. The title extends only one line and appears truncated  at the browsing page, but not at the actifact's page.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-05T15:50:10.000-0500",
      "body": "Bug Parade Engage 0.3&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-09T17:10:45.000-0500",
      "body": "I've been looking into this and it seems that it won't be possible with the current way the navBar is laid out.&#x20;\n\nThe ellipsis, when used in a table require that the table have a fixed layout.\n\n<http://www.blakems.com/archives/000077.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-10T13:16:31.000-0500",
      "body": "This jira is all complete, except for my collection (in a branch) and artifact view (the frog is guarding the code)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-12T13:06:56.000-0500",
      "body": "artifact view is complete, just waiting on my collection\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-16T12:03:38.000-0500",
      "body": "Worked with Yura to implement  some restyling and had mark up changes to the nav bar. Basically we pulled the table-cells which prevented the ellipsis.\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-22T17:20:24.000-0500",
      "body": "Tested on 02/22/2010, 4:46 PM EST.\n\nLooks good. Issue closed.\n"
    }
  ]
}
---
In the view testing tasks the description of the title is:\
Title should appear, centered at the top, taking up exactly one line. If the title would otherwise extend past one line, the excess should be truncated and replaced with an ellipsis (i.e., "...").&#x20;

However the title for the MMI artifact extends over three lines (out of the title bar - when the Iphone is held vertically) and does not get truncated, etc.

<http://build.fluidproject.org:8095/engage/artifacts/view.html?mmi&1984.077.0021>

        