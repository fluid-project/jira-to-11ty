---json
{
  "title": "KETTLE-37",
  "summary": "Implement JSON5 support for loading config files with comments",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-10-21T11:28:25.221-0400",
  "updated": "2020-11-04T18:20:49.470-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2017-04-27T13:26:50.739-0400",
      "body": "Merged at <https://github.com/fluid-project/kettle/commit/5375e888a5e05021f36da7ba7c49c391af009d57>\n\n \n"
    }
  ]
}
---
The helpful and permissive JSON5 spec (<http://json5.org/>) seems well established and has a reference implementation at <https://github.com/aseemk/json5> and a grunt plugin <https://github.com/ragnarokkr/grunt-json5lint> . We should implement support for this format in our "config" files so that they can incorporate comments and a more permissive syntax.

        