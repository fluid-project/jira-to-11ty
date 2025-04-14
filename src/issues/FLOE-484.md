---json
{
  "title": "FLOE-484",
  "summary": "npm install of chartAuthoring fails when it is a dependency",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "Antranig Basman",
  "date": "2016-10-02T15:22:02.395-0400",
  "updated": "2020-10-22T08:14:59.292-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-11-08T13:54:29.637-0500",
      "body": "Here's a pad of discussion about this and some other issues: <https://pad.gpii.net/p/infusion-module-discussion-oct-4-2016-okg4ntt>\n"
    }
  ]
}
---
There are various assumptions built into the npm packaging and grunt files for chartAuthoring that are only valid if it is the top-level install dependency.\
The first of these are the bundling of its essential grunt tasks as "devDependencies" such as        "grunt": "1.0.1",\
"grunt-contrib-copy": "1.0.0",\
"grunt-exec": "1.0.0",

These are all necessary as part of its "npm postinstall" step which make a build of Infusion and other libraries and copy them in.

Other assumptions relate to the actual position of infusion etc. in the filesystem which may well differ based on the version of npm in use and the structure of other dependencies in the tree

        