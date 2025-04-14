---json
{
  "title": "FLUID-5521",
  "summary": "Implement the \"Fluid module loading system\", capable of autonomously finding and loading modules throughout a directory tree",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-10-06T14:54:07.589-0400",
  "updated": "2015-10-22T03:26:08.454-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5503/",
      "key": "FLUID-5503",
      "summary": "Create simple scheme for locating and loading files and resources relative to a module"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5579/",
      "key": "FLUID-5579"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-10-22T03:26:08.452-0400",
      "body": "Not resolved - work on this task is only just beginning!\n"
    }
  ]
}
---
Leading on from FLUID-5503, there is scope for a more fully featured module system, capable of taking on the tasks of module location and resolution throughout a hierarchy.&#x20;

Notes describing this implementation and its motivations are at <http://wiki.fluidproject.org/display/fluid/Notes+on+the+Infusion+Module+Loader>

Main tasks:

i) Find modules conforming to a specification automatically throughout a hierarchy, without requiring explicit "require" statements for linkage - this makes it easier for 3rd parties to introduce their code into a GPII, for example, without forking the codebase\
ii) Support for "linking" module resolution requests to a particular path during development - this eases the pain of working with multiple related modules without having to round-trip them all via git and npm\
iii) Coordinate access to shared modules during installation and loading - for example, standard npm semantics force installation of multiple copies of infusion which are a hazard during standard node module loading, requiring a custom grunt task "grunt dedupe-infusion" to eliminate them as an extra build step. We will construct custom grunt tasks and packaging to replace the use of npm for these tasks, which will rely on this module loading code during build time.

Two of the prerequisites described in the wiki notes (fluid.global, and module registration system) have already been achieved as part of the FLUID-5503 work

        