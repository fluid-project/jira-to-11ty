---json
{
  "title": "FLUID-2323",
  "summary": "Clicking on page links throws an error: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-03-09T09:27:18.000-0400",
  "updated": "2009-03-26T11:17:32.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Pager"
  ],
  "environment": "IE 6, IE 7(Win XP)\\\nIE 7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-12T12:04:39.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-03-25T17:33:06.000-0400",
      "body": "I think the various IE issues are now resolved, at least, to me, the component now seems slow, but stable - at revision 6842.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-26T11:00:11.000-0400",
      "body": "Reviewed, and it works for me. I cant generate an error/ crash anymore\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-26T11:17:32.000-0400",
      "body": "Verified fix using:\n\nIE 6, IE 7(Win XP)\\\nIE 7 (Win Vista)\n"
    }
  ]
}
---
Clicking on page links throws an error

Steps to reproduce

1\) Open the sakai site setting page from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/pager/sakai-site-setting/site_setting_members.html#>

2\) Randomly click on page links

Notice that after several clicks an error is thrown

Error:left is null or not an object\
Line: 217\
File: jquery.tooltip.js

        