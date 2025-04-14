---json
{
  "title": "FLUID-2024",
  "summary": "Undo/Redo links set scroll to top",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Gonzalo David Silverio",
  "date": "2008-12-17T16:59:19.000-0500",
  "updated": "2009-02-12T12:49:07.000-0500",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2024/PATCH-2024.patch",
      "filename": "PATCH-2024.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-18T09:49:48.000-0500",
      "body": "This occurs in both the Sakai Announcements and the bSpace examples\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-06T12:55:14.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-02-12T09:43:29.000-0500",
      "body": "Patch uses 2 methods to stop page jumping: rewrites default href to a non-jumping fragment and prevents default anchor behaviour\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-02-12T11:53:31.000-0500",
      "body": "New patch only returns false\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-02-12T12:01:37.000-0500",
      "body": "I find this new patch wholly admirable\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-12T12:49:07.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)&#x20;\n"
    }
  ]
}
---
Clicking on these links take the scroll to the top. If the link was way below the scrolled viewport the user will be taken to the top

        