---json
{
  "title": "SJRK-158",
  "summary": "Remove ECL from licence info",
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
  "date": "2018-07-09T17:17:16.835-0400",
  "updated": "2018-07-12T11:26:24.915-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-07-11T11:26:44.990-0400",
      "body": "Work has been completed for the UI project, Server project is encapsulated in a pull request to Alan's repo: <https://github.com/waharnum/sjrk-story-telling-server/pull/8>\n"
    }
  ]
}
---
The licence for the Storytelling tool should only be the New BSD Licence (aka 3-clause), according to the guidelines for new projects here: <https://wiki.fluidproject.org/display/fluid/Fluid+Licensing>

Remove references to ECL in both projects so that only the BSD licence text is present, paying attention to the grammar.

        