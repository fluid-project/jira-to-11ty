---json
{
  "title": "FLUID-1028",
  "summary": "After deleting a file from the file queue, focus should be on the next file.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2008-07-24T20:46:59.000-0400",
  "updated": "2008-07-28T08:43:30.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-07-25T20:31:32.000-0400",
      "body": "Fixed at revision 5283, at home in keyboard-a11y. Focus will now never be \"dropped\" so long as the \"refresh\" method is called appropriately.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-28T08:43:30.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open either version of the uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) Add several files to the file queue

3\) Tab to the file queue and delete  a file with the 'delete' button

4\) notice that focus leaves the file queue&#x20;

        