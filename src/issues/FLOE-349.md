---json
{
  "title": "FLOE-349",
  "summary": "The keyboard panel breaks if the page is re-rendered after trying sticky keys",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-05-26T09:45:20.178-0400",
  "updated": "2015-11-03T13:08:11.210-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-349/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-05-26T09:46:10.931-0400",
      "body": "screenshot.png shows the broken rendering after model change.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-26T14:11:29.870-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/64>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-05-26T14:50:09.184-0400",
      "body": "Merged @ e653d73cdb59ffd60a5a0ec7f220f41170aa863a\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the first discovery tool\
<http://build.fluidproject.org/first-discovery/demos/>

2\) Navigate to the keyboard panel and enable sticky keys (via the "try it" button)

3\) toggle the "turn voice off/on" button

Notice that the page is rerendered in a broken state.

        