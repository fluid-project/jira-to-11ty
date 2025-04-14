---json
{
  "title": "FLUID-1005",
  "summary": "The arrow keys activate the file queue even if the file queue or an item with in is not focused",
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
  "reporter": "Eli Cochran",
  "date": "2008-07-24T18:36:11.000-0400",
  "updated": "2008-07-28T09:13:20.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF3, Mac (tested environment)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-07-25T14:11:16.000-0400",
      "body": "by making the queue not the uploader the selectable element we ensure that the rows only focus when the parent queue is part of the focus chain\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-28T09:13:20.000-0400",
      "body": "Verified Fix using:\n\nFF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\n"
    }
  ]
}
---
1\) Using the keyboard, load the file queue with a number of files

* note that the Upload button has focus\
  2\) Press the down arrow
* the first row in the file queue will have focused

The arrows keys should only focus rows in the file queue if the queue or the elements in the queue already have focus

        