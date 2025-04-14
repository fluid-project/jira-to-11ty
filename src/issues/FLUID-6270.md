---json
{
  "title": "FLUID-6270",
  "summary": "fluid-publish should add branch information to build names",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2018-04-05T20:23:48.425-0400",
  "updated": "2024-07-22T10:35:05.273-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "fluid-publish"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-04-06T09:53:58.398-0400",
      "body": "I was going to use \"+\" to add the branch/id name as build metadata, but it turns out it gets stripped out by npm ( see: <https://github.com/npm/npm/issues/12825> )\n"
    }
  ]
}
---
It would be very helpful if, if fluid-publish were run on a branch other than one named "master", it would add some information to the build artefact name that could be used to trace where this branch was. Right now I am working on <https://issues.fluidproject.org/browse/FLUID-6148> and it would be great to be able to roll some dev release for people to test, but I'm nervous that they would appear indistinguishable to our recent sequence of "generally pretty good" builds that have been cut from master over the last year or so and someone might use it by accident and blow themselves up.

Right now our builds look like 3.0.0-dev.20180326T173646Z.8c6a109b1 and so it would be great if, for example when run from a branch named FLUID-6148 it would by default appear as 3.0.0-dev.FLUID-6148.20180326T173646Z.8c6a109b1 or so, and with the ability to manually choose the extra identifying string via a command line option if the branch didn't happen to be suitably named in the user's local repository.

        