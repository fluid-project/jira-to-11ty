---json
{
  "title": "SJRK-399",
  "summary": "Cancel file uploads on block removal",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-10-13T20:34:36.291-0400",
  "updated": "2020-10-13T20:35:10.805-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-289/",
      "key": "SJRK-289",
      "summary": "Add auto-save or caching feature for story authoring"
    }
  ],
  "attachments": [],
  "comments": []
}
---
When a media block (image, audio, video) is in the process of uploading a file and the block is removed, the upload should be cancelled. This work depends on <https://fluidproject.atlassian.net/browse/SJRK-289#icft=SJRK-289> being completed, or it may be included in the work for that Jira.

This may be achieved via XHR.abort() (documentation available from the [W3C](https://www.w3.org/TR/XMLHttpRequest1/#abort-send-algorithm), [MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/abort) and [good old StackOverflow](https://stackoverflow.com/questions/446594/abort-ajax-requests-using-jquery)).

In future iterations of the tool, this work may also be applicable if there is a "cancel upload" button or similar.

        