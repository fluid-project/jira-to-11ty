---json
{
  "title": "SJRK-233",
  "summary": "Context awareness does not work in Internet Explorer",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Gregor Moss",
  "date": "2019-02-27T16:41:47.286-0500",
  "updated": "2019-09-12T13:26:10.166-0400",
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
      "date": "2019-09-12T13:26:10.163-0400",
      "body": "Context awareness functionality has been removed from the project for the time being\n"
    }
  ]
}
---
The Context awareness check being used by sjrk.storyTelling.mobileCameraAware.hasMobileCamera uses the string prototype function "includes", which is not present in Internet Explorer's JavaScript engine (Trident). This feature works as expected in Edge (which has a different JS engine).

This detection may also be removed at some point, as the functionality it is used for may be redundant.

        