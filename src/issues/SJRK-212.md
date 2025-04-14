---json
{
  "title": "SJRK-212",
  "summary": "\"Alt text\" still appears for audio and video blocks even though field is hidden",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-02-04T18:39:18.725-0500",
  "updated": "2019-09-12T14:01:34.781-0400",
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
      "date": "2019-09-12T14:01:34.779-0400",
      "body": "Solved as part of <https://fluidproject.atlassian.net/browse/SJRK-273#icft=SJRK-273>\n"
    }
  ]
}
---
The "Alt text" label still shows up on the page (unless styling hides it) for audio and video block editors, even though the input field is marked as 'hidden'.

Possible solution: make the label rendering conditional depending on the block type (i.e. images only)

        