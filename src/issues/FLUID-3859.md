---json
{
  "title": "FLUID-3859",
  "summary": "Restart Demo link in the Progress Demo not being read when navigating through the page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Escalated",
  "reporter": "Justin Obara",
  "date": "2010-11-19T12:51:28.830-0500",
  "updated": "2014-06-25T16:16:11.296-0400",
  "versions": [
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Progress"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-19T12:52:33.263-0500",
      "body": "Appears to be either an NVDA or FF issue\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-03-03T16:34:30.277-0500",
      "body": "Changed the \"Affect Version\" to 1.3.1\n"
    }
  ]
}
---
After progress is complete, the live region text is read. Pressing tab then reads "Restart the Demo link". When you tab away from this link, and then back to it, the link is no longer read (says nothing when tab to it). It seems the reason is that NVDA changes modes when leaving the demo, and so when going back to it, it no longer reads the link text. Not sure if this is an expected NVDA behavior or not, but it doesn't seem related to our code. In fact, I think it's a firefox issue. <http://groups.google.com/group/free-aria/browse_thread/thread/c7d93105884074df/e740ee9e58c35f1f>

Originally commented as part of FLUID-3751

        