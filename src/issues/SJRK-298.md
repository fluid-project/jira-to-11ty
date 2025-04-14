---json
{
  "title": "SJRK-298",
  "summary": "Remove hardcoded URL from loadTheme function",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-09-25T14:24:12.982-0400",
  "updated": "2019-09-25T14:24:12.982-0400",
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
sjrk.storyTelling.loadTheme shouldn't hardcode the URL it uses to fetch the clientConfig.

One solution would be to provide the URL as a parameter, though this would mean duplicating it on every HTML page in the project. Explore potential alternatives.

        