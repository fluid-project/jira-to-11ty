---json
{
  "title": "FLUID-5050",
  "summary": "\"Table of content\" cannot be turned off in UIO demos",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Cindy Li",
  "date": "2013-06-12T16:06:27.869-0400",
  "updated": "2024-07-22T09:34:46.263-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos",
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": "Broken in these browsers: chrome, safari, IE8 & 9\\\nNo problem with firefox\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-06-14T17:17:08.158-0400",
      "body": "Merged pull request <https://github.com/fluid-project/infusion/pull/342> into project repo at f364026444ef1babfde31d115b1797d35b11691e\n"
    }
  ]
}
---
1\. Open an UIO demo;\
2\. Turn on "table of content" setting, the table of content is displayed on the page;\
3\. Turn off "table of content", nothing happens;\
4\. Refresh the page, the table of content section stays on the page but UIO "table of content" setting is at off.

This issue is re-producible in both fat panel and full page demos.

        