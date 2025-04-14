---json
{
  "title": "FLUID-3203",
  "summary": "Separate out the mysql-specific code for caching into its own module",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2009-09-23T13:17:03.000-0400",
  "updated": "2014-03-03T11:20:12.184-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-09-23T13:18:10.000-0400",
      "body": "Currently the caching code is integrated fully into postProcessor. It would be better if this code were split off into a module of some sort that would allow us to plug in caching using different databases.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:12.182-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---

        