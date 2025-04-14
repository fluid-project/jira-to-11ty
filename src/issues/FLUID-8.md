---json
{
  "title": "FLUID-8",
  "summary": "Lightbox and Fluid architecture needs to be factored properly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2007-06-27T10:00:38.000-0400",
  "updated": "2011-01-14T10:21:28.492-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-25/",
      "key": "FLUID-25"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-26/",
      "key": "FLUID-26"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-27/",
      "key": "FLUID-27"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-28/",
      "key": "FLUID-28"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-07-17T12:04:56.000-0400",
      "body": "This issue has been superceded by several smaller issues, including <https://fluidproject.atlassian.net/browse/FLUID-25#icft=FLUID-25>, <https://fluidproject.atlassian.net/browse/FLUID-26#icft=FLUID-26>, <https://fluidproject.atlassian.net/browse/FLUID-27#icft=FLUID-27>, <https://fluidproject.atlassian.net/browse/FLUID-28#icft=FLUID-28>.\n"
    }
  ]
}
---
Currently the vast bulk of the Fluid code resides in "Lightbox.js" which needs to be factored out into areas of different responsibility and scope.

The key change would be extracting "Reorderable.js" which includes just the core client-side definitions which are independent of the particular use case of a Lightbox - this would involve a global renaming and creating of a new JIRA artefact 😛

With commit 10335 we have the beginning of the FluidProject "modules" system and are starting to see code which arguably should be shared across multiple artefacts, e.g. "seekNodesById", "findForm" etc.  \
Some of these are tied "in spirit" to the RSF client-side naming scheme, which we should also decide what status it has within Fluid. I am so far avoiding a dependence on the RSF key client-side files rsfbasic.js and rsf.js, but many of these algorithms would ultimately be common to these, for which we need some kind of policy/organisation.

The dojo.js "compilation" system is very neat, although currently suffers from a number of implementation errors which makes it unusable IMO (for example the completely opaque error on trying to load a module with a syntax error).&#x20;

        