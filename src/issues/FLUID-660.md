---json
{
  "title": "FLUID-660",
  "summary": "Can't tab focus Browse Files button in IE7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Jonathan Hung",
  "date": "2008-05-28T15:38:49.000-0400",
  "updated": "2008-12-02T15:35:09.000-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "WinXP IE7\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-494/",
      "key": "FLUID-494",
      "summary": "File Upload: Add keyboard support"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-657/",
      "key": "FLUID-657",
      "summary": "Implement basic keyboard support in Uploader"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-982/",
      "key": "FLUID-982",
      "summary": "Programmatically focus the Upload, Browse Files, and Done buttons at the appropriate times."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-05-29T16:54:02.000-0400",
      "body": "I've updated the inline version of the Uploader markup to include a tabindex on the Browse Files button. Eli has already fixed the problem in the pop-up version.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-05-29T16:54:31.000-0400",
      "body": "Jonathan, we think this one is fixed. Can you take a look and verify?\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-07-11T17:35:11.000-0400",
      "body": "Partially fixed. Focus can be placed on the Add Files button on initial load, but can't gain focus on subsequent \"tab-arounds\".\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-07-11T17:40:44.000-0400",
      "body": "Upon further testing, appears fixed in FF2, but not in IE7.\n\nTo reproduce in IE7:\n\n1\\. Load uploader page.\\\n2\\. Without touching the mouse, begin tabbing through IE7. After tabbing through various IE7 buttons, the uploader will focus on Browse, Upload, and Cancel in that order.\\\n3\\. Continue tabbing through, so you're starting at the \"top\" of IE7 again.\\\n4\\. Keep tabbing through. When getting to the Uploader, focus can only be placed on Upload and Cancel, in that order. Browse appears to be dropped from the focusable items.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-15T17:34:35.000-0400",
      "body": "This issue may be addressed by <https://fluidproject.atlassian.net/browse/FLUID-494#icft=FLUID-494>, so that task should be carried out first, and then double-check if this bug is still present.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-18T13:46:52.000-0400",
      "body": "This is also an issue in Safari 3 (Mac OS 10.5, Win XP)\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-07-22T23:34:58.000-0400",
      "body": "We hope that implementing <https://fluidproject.atlassian.net/browse/FLUID-982#icft=FLUID-982> will fix this one.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-07-22T23:35:41.000-0400",
      "body": "Eli, I'm assigning this issue to you because I think it will likely be fixed by your work on <https://fluidproject.atlassian.net/browse/FLUID-982#icft=FLUID-982>. When you've implemented it, can you take a look to verify that it is fixed?\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-31T16:14:43.000-0400",
      "body": "although the button doesn't show the right focus styling, it does get focus\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-02T15:35:09.000-0500",
      "body": "this issue has been reopened in FLUID- 1050\n"
    }
  ]
}
---
Using the keyboard, can't tab-focus the Browse Files button.

dev-iteration39

        