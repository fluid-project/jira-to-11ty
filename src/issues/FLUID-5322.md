---json
{
  "title": "FLUID-5322",
  "summary": "Overview panel doesn't have a border for itself at high contrast themes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Cindy Li",
  "date": "2014-04-25T12:36:31.261-0400",
  "updated": "2014-05-08T12:40:45.403-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5322/Overview panel border.jpeg",
      "filename": "Overview panel border.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2014-04-28T10:10:37.271-0400",
      "body": "This has been fixed and part of this pull request:\\\n<https://github.com/fluid-project/infusion/pull/496>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-08T12:40:43.325-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/496> ) into the project repo at 785721dc2d221d7db1b4c4db1627899aa1ec02bb\n"
    }
  ]
}
---
1\. Open a demo page having both overview panel and UIO, such as: <http://build.fluidproject.org/infusion/src/demos/prefsFramework/>\
2\. Open UIO panel, in "colour & contrast", pick any non-default contrast;\
3\. Both the main page and the overview panel have the new background colour applied. Without the border of the overview panel having a different colour, the overview panel looks like a part of the main page.

        