---json
{
  "title": "FLUID-924",
  "summary": "OSDPL Architecture: Review OSDPL Navigation, Content Structure for usability",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Allison Bloodworth",
  "date": "2008-07-16T21:01:39.000-0400",
  "updated": "2008-12-03T08:56:17.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1388/",
      "key": "FLUID-1388",
      "summary": "OSDPL Architecture: Plan the architecture [Shared with PZ]"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1092/",
      "key": "FLUID-1092"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-925/",
      "key": "FLUID-925",
      "summary": "OSDPL: Update OSDPL with usability improvements recommended in review"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-1131/",
      "key": "FLUID-1131"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-07-16T21:01:54.000-0400",
      "body": "Main Page ideas:\n\n* create a visual like the web patterns library uses: <http://groups.ischool.berkeley.edu/ui_designpatterns/webpatterns2/webpatterns/home.php>\n* show short summaries of recent patterns like Yahoo! uses: <http://developer.yahoo.com/ypatterns/>\n* We could also invite people to rate patterns, but I'm not sure if we want to require a user account to do this?\n* \"Recent Patterns\" box\n* a prominent Search or Tag cloud so the user can start browsing&#x20;\n\nNavigation ideas:\n\n* quick access to the patterns\n* a clear expression of pattern hierarchy (currently parents and children are at the same level, which is not ideal)\n* accessible menus, ideally which can be navigated with the arrow keys\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-01T10:04:47.000-0400",
      "body": "iteration22\n\ndoing some of this work at All-Hands meeting through user testing.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-01T10:05:48.000-0400",
      "body": "Going to do short iterations of this task and repeat over the course of the project. The objective is to constantly evaluate the site and identify priority tasks to tackle.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-12-03T08:56:17.000-0500",
      "body": "This high level task is done, but thanks to user testing we have identified some areas in which navigation, browsing, structure, and general usability can be improved.\n"
    }
  ]
}
---
A broad task: Investigate usability on the OSDPL and recommend solutions.

Current issues include...

Information and navigation structure.

* getting people to content, how much content will we have, point to ischool web patterns page in JIRA
* rethink categories and whether they make sense
* rethink main content area on main page.
* rethink menu and navigation

- do competitive analysis of other content sites (i.e. iTunes, Amazon, C|Net, Yahoo patterns etc.) to see how they organize their content, structure, and navigation.

Content:

* redo splash pages for categories, make it easy to tab through the patterns without going to a lot of other links (table of contents at top? but this may push the screenshots down too much, see web patterns library or yahoo for view of what this could look like)
* investigate to find out whether you can put focus into content area directly after clicking a link (e.g. put focus into the content area if they clicked on a design pattern navigation link)

Navigation:

* investigate how to customize tab order of the site. Possibly implement after info structure is finalized. May not be necessary depending on what our investigation reveals (i.e. if the site is streamlined enough, we may not need a custom tab order)
* fluid 588 update to include info on moving child patterns to top

        