---json
{
  "title": "SJRK-283",
  "summary": "Selection Reader play button is not displayed in the correct location in the editor preview",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2019-09-11T15:01:57.507-0400",
  "updated": "2020-01-22T17:01:50.518-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-274/",
      "key": "SJRK-274",
      "summary": "Story audio preview contains \"by\" and \"keywords\" when fields are empty"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6394/",
      "key": "FLUID-6394"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-10-08T16:57:25.193-0400",
      "body": "This is potentially the same issue as <https://fluidproject.atlassian.net/browse/FLUID-6394#icft=FLUID-6394>\n"
    }
  ]
}
---
For <https://fluidproject.atlassian.net/browse/SJRK-274#icft=SJRK-274> we added the Orator component to handle the TTS for the story. However, there was a bug with the positioning of the selection reader's play button when used in the editor's preview. ( See: <https://github.com/fluid-project/sjrk-story-telling/pull/40#issuecomment-530449872> ). For the time being we've disabled the selection reader and only make use of the Orator's domReader. We should however, enable the selection reader and fix the positioning issues. 

It appears that the positioning issue may be caused by the relative positioning of an ancestor or neighbouring element. One of the ones that isn't present on the story viewer page. 

        