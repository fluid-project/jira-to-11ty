---json
{
  "title": "SJRK-373",
  "summary": "Image rotation isn't always working",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-07-02T17:23:25.104-0400",
  "updated": "2020-07-30T16:23:19.073-0400",
  "versions": [],
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
Image rotation doesn't always work in the Story Editor, i.e. in the editor or the previewer steps. Rotation on the server side at publish time is working as expected.

This issue has been noted in Chrome 83 and Firefox 78, as client-side image rotation seems to work fine in Edge 44 (pre-Chromium)

This will almost certainly no longer be an issue after SJRK-289 is deployed, but it is being noted here in the meantime.

        