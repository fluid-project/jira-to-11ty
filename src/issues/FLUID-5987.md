---json
{
  "title": "FLUID-5987",
  "summary": "Sliding panel doesn't open unless \"reset\" is triggered",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2016-10-24T12:58:14.172-0400",
  "updated": "2016-10-25T14:23:43.313-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "FF 49, IE 11, MS Edge\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5988/",
      "key": "FLUID-5988",
      "summary": "Declaratively define listeners used in UIO"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5988/",
      "key": "FLUID-5988"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5989/",
      "key": "FLUID-5989"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5987/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-10-24T12:58:56.669-0400",
      "body": "screenshot.png shows the panel opened a sliver, after clicking \"show display preferences\"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-10-24T15:40:59.727-0400",
      "body": "We should make sure we have an automated test case for this issue if possible. If it is not possible, we should add it to a register of tasks that we will deal with when we can start writing webdriver-backed full UI tests.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-10-24T16:28:52.367-0400",
      "body": "@@Antranig Basman I'd say it'd definitely get covered by a webdriver-backed UI test as we'd need to be manipulating the adjusters and etc inside the panel. A jQunit style test might be a bit more difficult.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-10-24T16:53:47.299-0400",
      "body": "@@Antranig Basman I attempted to write a test for this case but am having trouble. The values for the iframe document height ( 981 ) and panel height ( 69 ) seem to be way off in the test instance. I tried modifiying the test file both before and after the fix was applied and both seemed to return the same values. ( using FF ).\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-10-25T12:18:18.864-0400",
      "body": "The pull request to fix the infusion code <https://github.com/fluid-project/infusion/pull/768> has been merged into the master at a74754234ccf34e43465063bbbdf8971bb4075b0\n\nKeeping it open for adding webdriver-backed UI tests later when it's doable with infusion.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-10-25T12:30:29.857-0400",
      "body": "Closing this issue as the need for writing web-driven tests has been created as a separate JIRA: <https://issues.fluidproject.org/browse/FLUID-5989>\n"
    }
  ]
}
---
Steps to reproduce:

1. open the [UIO Demo](http://build.fluidproject.org/infusion/demos/uiOptions/)
2. open the sliding panel by triggering the "show display preferences" button
3. Notice that the panel only slightly opens and nothing is visible
4. Notice that clicking reset causes the panel to open properly

        