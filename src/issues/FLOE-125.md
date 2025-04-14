---json
{
  "title": "FLOE-125",
  "summary": "Implement a sidebar where metadata editing will appear",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-12-05T10:35:11.356-0500",
  "updated": "2013-12-20T15:25:09.399-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-12-10T09:04:53.994-0500",
      "body": "This will include the work to integrate the panels with the editor.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-12-10T09:17:58.327-0500",
      "body": "Example combined model that the editor will be working with and saving to persistence.\n\n{\\\nurl: \"path/to/video.mp4\",\\\nhighContrast: true,\\\nsignLanguage: true,\\\nflashing: flashing, // noFlashing, unknown are alternatives\\\ncaptions: \\[{\\\nsrc: \"path/to/captions.srt\",\\\nlanguage: \"fr-CA\" // language code\\\n}],\\\naudio: \"available\", // unavailable, unknown are alternatives\\\naudioKeywords: \\[\"dialogue\", \"soundtrack\", \"sound effect\"]\\\n}\n"
    }
  ]
}
---
A sidebar, either adjacent too or sliding in from the editor needs to be implemented. It will be populated with the specific metadata editing UI needed for a particular type of metadata selected for a media type in the editor. This first pass is for the demo only, and will be upgraded later to fully match the designs.

        