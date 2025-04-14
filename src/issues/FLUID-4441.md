---json
{
  "title": "FLUID-4441",
  "summary": "UI Enhancer tests failing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Mike Lam",
  "date": "2011-09-12T15:35:05.282-0400",
  "updated": "2011-09-14T16:09:05.853-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer"
  ],
  "environment": "All browsers, in both Ubuntu and XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-09-14T16:09:05.847-0400",
      "body": "I merged Cindy's pull request ( <https://github.com/fluid-project/infusion/pull/164> ) into the project repo at 481daf0fee4f3cd586d5f3dda03c4373c635d7f6\n"
    }
  ]
}
---
Tests 3.2 and 5.2 are broken.   lineSpacer.calcInitSize is not a function and textSizer.calcInitSize is not a function

        