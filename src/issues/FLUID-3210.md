---json
{
  "title": "FLUID-3210",
  "summary": "Remove final-report specific text and links from Demo Portal",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2009-09-24T18:16:51.000-0400",
  "updated": "2011-01-15T15:10:32.842-0500",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3151/",
      "key": "FLUID-3151"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-3151/",
      "key": "FLUID-3151",
      "summary": "All links on the demo portal landing page should point to a live resource (not the final report)"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-09-24T18:17:55.000-0400",
      "body": "Bug Parade Infusion 1.1.2\n\n(approved by the King and his Proxy)\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-30T13:35:36.000-0400",
      "body": "We also want to ensure that all links point to our live wiki, not to the final report archive.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-30T13:36:36.000-0400",
      "body": "Bug Parade Infusion 1.1.2\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-05T15:41:08.000-0400",
      "body": "Colin and I talked about this and decided that the way we'll implement the freeze is by tagging a final report version of Infusion and linking the final report externals to that.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-05T16:48:52.000-0400",
      "body": "All the wiki links still need to be updated to point to the live wiki\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-05T17:11:36.000-0400",
      "body": "I checked all the wiki links that Jacob fixed - they are all fine.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T12:28:49.842-0500",
      "body": "Reopening these issues in order to add the democomponent.&#x20;\n"
    }
  ]
}
---
At the moment, we've got a section at the top of the demo portal that provides navigation for the final report. This will cause problems when we cut the Infusion 1.1.2 release.

Before we do anything, we need to devise a strategy for migrating the final report from the build server to a somewhat more stable place. Once a snapshot of the report has been made and posted--and only then--we can remove the final report text from Infusion trunk.

        