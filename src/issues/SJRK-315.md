---json
{
  "title": "SJRK-315",
  "summary": "authoringEnabled not distributing to all UI's as expected",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-11-15T17:57:53.617-0500",
  "updated": "2019-11-19T09:11:13.733-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-11-15T18:02:12.513-0500",
      "body": "it may have to do with specifically how each page is loaded and options are relayed to it within storyTellingServerUI.js. Does passing in the options parameter with distributeOptions get overwritten by other distributeOptions blocks? should they all have \"priority\" and/or \"namespace\" set?\n"
    },
    {
      "author": "Cindy Li",
      "date": "2019-11-19T09:11:13.729-0500",
      "body": "Solved with the merge of \\[the pull request for SJRK-297]\\(<https://github.com/fluid-project/sjrk-story-telling/pull/47>).\n"
    }
  ]
}
---
The authoringEnabled flag, set in the server config file and relayed to each page grade within storyTellingServerUI.js, is not being properly relayed. Specifically, the dynamicValues.authoringEnabled value is only accessible from the Edit page's template and not the Browse or View pages.

**Expected**: dynamicValues.authoringEnabled value is set and usable within all page templates and matches the server config value.

**Actual**: dynamicValues is empty

        