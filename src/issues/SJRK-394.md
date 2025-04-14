---json
{
  "title": "SJRK-394",
  "summary": "Story Tool: Allow author to toggle auto-save on and off",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Gregor Moss",
  "reporter": "Dana",
  "date": "2020-09-08T16:04:46.153-0400",
  "updated": "2020-09-14T17:07:27.217-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-289/",
      "key": "SJRK-289",
      "summary": "Add auto-save or caching feature for story authoring"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-394/autosave toggle.png",
      "filename": "autosave toggle.png"
    }
  ],
  "comments": []
}
---
Provide a way for an author to turn auto-save on and off, and ensure that they are aware of what is happening and what to expect:

* if they do not turn it on, and they close the browser without publishing, their story will be lost
* if they turn it on, their draft story will appear in the story editor when they open it again in the same browser (and the implications for privacy on a shared computer)

        