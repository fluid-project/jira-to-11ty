---json
{
  "title": "SJRK-461",
  "summary": "Publishing an empty story re-directs to an error view page",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-03-16T12:55:28.567-0400",
  "updated": "2021-03-16T13:25:17.004-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Publishing a story that has not had any content or metadata added, appears to publish successfully, but since the localStorage ID was null, the author is redirected to the View page with a story ID of null afterwards. However, going to "Browse Stories" will show an empty story has in fact been published.

This is likely related to changes made for SJRK-452 which does not create an initial story until the content or metadata has been modified. When the the user gets to the preview screen there is still an option to publish. At this point the local storage hasn't been populated because there is no saved story, so no story id to redirect to. However, the publishing will create the new story.

        