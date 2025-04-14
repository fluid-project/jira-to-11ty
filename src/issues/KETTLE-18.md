---json
{
  "title": "KETTLE-18",
  "summary": "Bump expression dependency",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Javier Hernández",
  "reporter": "Javier Hernández",
  "date": "2013-09-09T06:56:25.759-0400",
  "updated": "2015-08-26T20:38:25.893-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-12-17T11:16:01.248-0500",
      "body": "This appears to be a downgrade of express to version 3.3.5 which seems undesirable. But perhaps the diff has been expressed backwards. Also, this dependency should be resolved via npm rather than Fedora repositories so I'm not sure what the force of requirement is.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-26T20:38:25.890-0400",
      "body": "Express was upgraded beyond this version in \"old Kettle\" long ago - also, \"new Kettle\" will bring us up to express trunk\n"
    }
  ]
}
---
During the packagement of the kettle module for Fedora 19 I had to bump the express' version dependency \[1] to match an available nodejs-express' package version from the Fedora repositories.

I ran Kettle's tests and they ended fine, the GPII still works (logged in and out successfully as some NP sets), so IMVHO this change seems to be secure.

\[1]: <https://build.opensuse.org/package/view_file/home:javihernandez:GPII:Factory/nodejs-kettle/bump-express-dep.patch?expand=1>

        