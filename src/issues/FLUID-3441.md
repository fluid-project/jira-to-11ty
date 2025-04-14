---json
{
  "title": "FLUID-3441",
  "summary": "Interaction with selections/deselections when dependencies are involved is wonky",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2009-12-17T11:23:03.000-0500",
  "updated": "2014-03-03T11:20:11.887-0500",
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
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:11.871-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
Selecting a module with dependencies automatically selects its dependencies.\
Deselecting the original module deselects all its dependencies if they're selected.\
This seems to make sense.

However,\
selecting a module with dependencies automatically selects its dependencies (as before).\
Deselecting a dependency doesn't deselect the original module (i.e., you can download a module without its dependencies)\
This feels wonky.

Also,\
Selecting a module's dependencies, and then the parent module itself, and then deselecting the parent module leaves the dependencies selected.\
This feels slightly wonky too. (What if the user didn't know the parent module was dependent on those other modules?)

I think it'd help significantly if we could show the dependencies.

        