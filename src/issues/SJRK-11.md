---json
{
  "title": "SJRK-11",
  "summary": "\"Listen to my story\" malfunctioning",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Gregor Moss",
  "date": "2017-10-04T18:37:00.779-0400",
  "updated": "2017-10-31T15:06:41.704-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Windows 10, Chrome 61\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2017-10-18T18:30:36.404-0400",
      "body": "The speaker will still read out \"by\" if the author name is blank, but it is building the rest as it should be (and the same way it was before)\n"
    }
  ]
}
---
The "Listen to my story" buttons now no longer read the story out properly. This is likely due to switching from fluid.stringTemplate to gpii-handlebars, so that the message\_readStoryText value no longer resolves properly at runtime.

It currently resolves to ", by ." in English, so the story title, author name and story content are not being substituted properly.

        