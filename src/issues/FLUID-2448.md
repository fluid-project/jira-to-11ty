---json
{
  "title": "FLUID-2448",
  "summary": "No keyboard focus styling on page links",
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
  "reporter": "Justin Obara",
  "date": "2009-04-01T12:56:08.000-0400",
  "updated": "2009-05-25T12:16:45.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Pager"
  ],
  "environment": "FF2, FF3, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE8 (Win XP)\\\nFF3, IE8 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T10:10:43.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-15T14:23:09.000-0400",
      "body": "I put in a hack in overrides.css to make this appear - but I guess it would be interesting to know why it disappeared in the first place.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-05-25T12:03:56.000-0400",
      "body": "base.css had a rule on line 41\\\na {\\\noutline:none\\\n}\n\nwhich removed the focus effect.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-05-25T12:09:32.000-0400",
      "body": "I reviewed Antranig's change.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-25T12:09:50.000-0400",
      "body": "I have confirmed with Nico of the Sakai project that this screen and set of files have no currency within the overall Sakai effort - so we have no responsibility for propagating this fix to a wider community. base.css, reset.css and grid.css appear to be hacked versions of files originally distributed as part of YUI.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-25T12:16:44.000-0400",
      "body": "Verified fix using:\n\nFF3, Safari 3.2 (Mac OS 10.5)\\\nFF3, IE8 (Win Vista)\n"
    }
  ]
}
---
No keyboard focus styling on page links

Steps to reproduce:

1\) Open the Sakai Site Setting example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html>

2\) Tap the 'tab' key to place focus on one of the page links

Notice that there is no visual styling to show you that focus has been placed on a page link

        