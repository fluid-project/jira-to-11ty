---json
{
  "title": "FLUID-4318",
  "summary": "Tabs component needs its own css file",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "heidi valles",
  "date": "2011-06-30T16:19:37.617-0400",
  "updated": "2011-07-08T16:16:21.436-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Tabs"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-06-30T16:19:47.089-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-07-06T10:14:53.471-0400",
      "body": "Because it is actually a jquery widget, and our component is only a wrapper, expecting the user to include a jquery ui theme file isn't a stretch. We'll just rename demo-theme/ to default-theme/ (it's not currently used by anything right now), and have this be a sort of place-holder for our default infusion theme that will someday exist.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-07-06T10:17:34.711-0400",
      "body": "IRC discussion: <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2011-07-06>   8.22am-9.16am\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-07-07T14:43:39.077-0400",
      "body": "Renamed demo-theme to default-theme:  /lib/jquery/ui/css/default-theme/jquery.ui.theme.css req'd for Tabs component\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-07-07T15:05:37.280-0400",
      "body": "See <http://issues.fluidproject.org/browse/FLUID-4329> re: tabs styling in fat panel\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-07-07T15:09:44.846-0400",
      "body": "Heidi's fix was merged at commit 7bd27e50645115ffe00f94870deefe7ac223edfd.\n"
    }
  ]
}
---
Right now ../../../lib/jquery/ui/css/demo-theme/jquery.ui.theme.css is required for the Tabs to look like tabs, but instead the tabs portion of this file should be in a tabs.css file in the component dir

        