---json
{
  "title": "SJRK-73",
  "summary": "Reorganize the CSS rules",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-04-04T16:37:15.226-0400",
  "updated": "2018-05-10T16:27:10.075-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-05-10T16:27:10.068-0400",
      "body": "The common CSS rules have been moved to storyTelling.css and everything in learningReflections.css is specific to that \"skin\"\n"
    }
  ]
}
---
The project currently has two CSS files: learningReflections.css and storyTelling.css. The former is intended to be an additional rule set to provide styling specific to the Learning Reflections site. Currently it has some styling which would be shared between that and a more general, "unbranded" SJRK Storytelling Tool.

Reorganize the rules so that they are in the appropriate files

        