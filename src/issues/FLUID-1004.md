---json
{
  "title": "FLUID-1004",
  "summary": "After removing file using the keyboard, one can no longer focus the file queue",
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
  "date": "2008-07-24T18:30:22.000-0400",
  "updated": "2008-07-28T08:53:05.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF3, Mac (may happen other places but I haven't tested it)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1016/",
      "key": "FLUID-1016",
      "summary": "Can't tab focus the file queue unless scrollbar showing, using FF3"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1016/",
      "key": "FLUID-1016"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-07-25T13:40:42.000-0400",
      "body": "Pretty sure that this is related to the fact that when you removed a file occationally you no longer had scroll bars so 1016 whould kick in. Which is now fixed\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-25T14:49:08.000-0400",
      "body": "We're not there yet....\n\nThe row doesn't automatically select after a delete, and some folks have seen an inability to select the queue at all\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-25T16:51:31.000-0400",
      "body": "This bug is especially true on Opera. (Tested with Opera 9.5 on the Mac)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-28T08:53:05.000-0400",
      "body": "Appears to be fixed, may have been resolved along with fix to Fluid-1028.\n\nVerified using:\n\nFF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\n"
    }
  ]
}
---
Tested and verified in the Pop-up stand-alone version of the Uploader

Intermittent... working on a reproducible case

Using the keyboard only:\
1\) Load up the file queue with some files\
2\) Tab to focus the file queue\
3\) Arrow down to select a file\
4\) Press the Delete key to delete the file

* focus is lost on the file queue\
  5\) Attempt to tab back to the file queue
* can't be done&#x20;

        