---json
{
  "title": "FLUID-1412",
  "summary": "Wiki: Create more differentiation between headers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Allison Bloodworth",
  "date": "2008-09-02T20:58:27.000-0400",
  "updated": "2011-01-20T14:25:14.255-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Wiki"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-09-02T20:58:38.000-0400",
      "body": "\\-\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-09-16T14:22:21.000-0400",
      "body": "From what I understand in conversations with Gary Thompson back in June, it isn't a trivial CSS modification. The styles reside inside Velocity templates on the server.\n\nI didn't dig very deep, but the task may be to identify the proper velocity template being used for header styling and then modifying that template appropriately.\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-09-16T15:23:50.000-0400",
      "body": "I investigated the Administration console's \"Look and Feel\" section and could not find a way to change the headers there. We are using the \"Left Navigation\" theme and the alternate \"Default Theme\" actually has better differentiation between headers. I believe if we don't want to use the default theme, we may be able to add a stylesheet to customize the headers using these instructions: <http://confluence.atlassian.com/display/CONF256/Including+Cascading+Stylesheets+in+Themes>.&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-09-17T11:52:56.000-0400",
      "body": "Investigated  \\~/confluence-2.5-std/themes/leftnavigation/src/etc/templates/leftnavigation/leftnav-css.vm\n\nThat template appears to be the right template, but the changes are not being applied. May be a cache. Will need to investigate a little more.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-20T14:25:14.234-0500",
      "body": "This issue will be addressed as part of the new documentation redesign currently under way.\n"
    }
  ]
}
---
Currently it is very difficult to see any difference between the h2, h3 and h4 headers. This makes the wiki much harder to use, and is a serious usability issue for us all. We need to modify the wiki stylesheet to differentiate these headers further.

        