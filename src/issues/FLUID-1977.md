---json
{
  "title": "FLUID-1977",
  "summary": "Flash overlay needs to be inactive during upload (Flash 10)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-12-15T15:53:07.000-0500",
  "updated": "2008-12-18T11:12:38.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-15T16:05:42.000-0500",
      "body": "Bug Parade: 0.6 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-18T11:12:38.000-0500",
      "body": "Verified fix using:\n\nFF3, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n\nusing Flash 10\n"
    }
  ]
}
---
Flash overlay needs to be inactive during upload (Flash 10)&#x20;

Currently, the "Add More" button is still active, allowing the OS File Open Dialog to appear and add files to the queue while an upload is in progress.

        