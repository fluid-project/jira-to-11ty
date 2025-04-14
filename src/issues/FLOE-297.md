---json
{
  "title": "FLOE-297",
  "summary": "Connect the turn voice on/off button with the speak text enactor",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-04-01T09:17:49.234-0400",
  "updated": "2015-11-03T11:29:02.113-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-05-22T10:20:43.217-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/55>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-05-22T13:11:15.871-0400",
      "body": "The pull request has been merged into the master branch @ 588c66eb3a674bc9ed3d7925f8a7a81a90ca470f\n"
    }
  ]
}
---
Currently there are two settings for speak text. The turn voice on/off which handles the self voicing of the first discovery tool itself, and the speak text adjuster which handles self voicing / screen reading of the system. The two options have been found to be confusing for users. A first approach at removing this confusion is to link them together so that the two controls affect both the tools self voicing and the systems.

<http://wiki.fluidproject.org/download/attachments/40797428/First%20Discovery%20January%2029%2015%20small.pdf?version=5&modificationDate=1422562380914&api=v2>

        