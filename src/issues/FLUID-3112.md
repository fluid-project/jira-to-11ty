---json
{
  "title": "FLUID-3112",
  "summary": "Create an \"externals-only\" module in SVN that allows developers working across Infusion, Engage, and our other code bases to have a single set of externals.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Colin Clark",
  "date": "2009-08-18T17:18:05.000-0400",
  "updated": "2011-03-17T15:06:06.150-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-08-18T17:23:03.000-0400",
      "body": "Jacob, I've created the correct directory structure and externals. Can you update Engage so that it doesn't directly check Infusion out as an external, and update the paths to point to the new location of Infusion? (should just be a matter of adding infusion/ to the current paths)\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-08-19T11:45:01.000-0400",
      "body": "Engage has been updated\n"
    }
  ]
}
---
Here's Antranig's proposal for this to the mailing list:

As a follow-on proposal, I would like to talk about strategies for working across our\
various projects. Those working on engage need also to work on infusion - and also\
working with a trunk version, in case they need to make commits to base functions.

To be clearer - it would be great for the team that works across multiple projects to\
be able to do this with a SINGLE checkout of each project. Our traditional solution\
based on externals is asymmetric - and ends up with multiple images of infusion.

My proposal is to make an "externals-only" section which is intended to be the root\
checkout for developers who work across multiple trunks. This ensures that multiple\
projects can be checked out with consistent directory names and in a consistent\
relative structure.

I suggest making an area such as "fluid-checkout" or "fluid-externals", which,\
for example, has an externals structure like this:

fluid-checkout\\
&#x20;fluid-infusion -> <https://source.fluidproject.org/svn/fluid/infusion/trunk>\
fluid-engage -> <https://source.fluidproject.org/svn/fluid/engage/trunk>

and any other projects that we might work with.

And my suggested implementation:

<http://source.fluidproject.org/svn/fluid/>\
fluid-all/\
.externals\
engage/    -> <http://source.fluidproject.org/svn/incubator/engage-client/>\
kettle/        -> <http://source.fluidproject.org/svn/incubator/engage-sketches/trunk/> (this should probably be renamed soon)\
infusion/    -> <http://source.fluidproject.org/svn/fluid/infusion/>

        