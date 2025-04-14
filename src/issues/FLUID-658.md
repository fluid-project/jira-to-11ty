---json
{
  "title": "FLUID-658",
  "summary": "Reorderer Tabs: Cannot be reordered using expected keystrokes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Michael Elledge",
  "date": "2008-05-28T12:07:50.000-0400",
  "updated": "2008-11-13T13:34:38.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE 7.0, Firefox 2, MS Windows 2002 XP Service Pack 2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-03T16:03:59.000-0400",
      "body": "Mike, I'm having trouble reproducing this. Could let me know specifically which file you encountered this error with by adding the URL to this JIRA?\n"
    },
    {
      "author": "Michael Elledge",
      "date": "2008-06-04T16:37:30.000-0400",
      "body": "Hi Anastasia--\n\nHere's the URL: <http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>\n\nMike\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-07T17:28:28.000-0400",
      "body": "Appears to be fixed in current version.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:34:38.000-0500",
      "body": "appears to have been fixed\n"
    }
  ]
}
---
Pressing Cntrl + arrows moves focus to content box, instead of moving tabs. Should work same way as other tools, i.e., press Cntrl and arrow keys to initiate change.

        