---json
{
  "title": "FLUID-5321",
  "summary": "Missing icons on the overview panel when switching to a non-default text style using UIO",
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
  "date": "2014-04-25T12:25:23.966-0400",
  "updated": "2014-05-08T12:40:29.254-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5321/Overview panel font icons.jpeg",
      "filename": "Overview panel font icons.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2014-04-28T10:10:14.725-0400",
      "body": "This has been fixed and is part of this pull request:\\\n<https://github.com/fluid-project/infusion/pull/496>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-08T12:40:27.118-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/496> ) into the project repo at 785721dc2d221d7db1b4c4db1627899aa1ec02bb\n"
    }
  ]
}
---
1\. Open a demo having both overview panel and UIO, such as: <http://build.fluidproject.org/infusion/src/demos/prefsFramework/>\
2\. Open UIO panel, adjust "text style" to a non-default font;\
3\. The font icons on the overview panel turn into weird fonts instead of images.

        