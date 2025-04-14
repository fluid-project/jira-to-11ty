---json
{
  "title": "FLUID-5171",
  "summary": "text size and line spacing enactors don't apply to the fat panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-10-08T08:46:09.736-0400",
  "updated": "2013-10-08T13:39:18.064-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5123/",
      "key": "FLUID-5123",
      "summary": "Remove onIframeVisible event as the reapplication of text size and line-space in the iframe no longer seems necessary."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-08T10:06:29.882-0400",
      "body": "The issue is that the getTextSizeInEm and numerizeLineHeight invokers need to be dynamic. This is being addressed in the <https://fluidproject.atlassian.net/browse/FLUID-5161#icft=FLUID-5161> work.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-08T13:39:18.063-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/414> ) into the project repo at b4422d732612a84ba429f3866b97786e627d8fb1\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the Prefs Editor demo

2\) adjust the text size and/or line space\
Notice that the changes are applied to the content.

3\) close and re-open the panel\
Notice that the changes have not been applied to the panel.

        