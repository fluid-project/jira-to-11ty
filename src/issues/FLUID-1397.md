---json
{
  "title": "FLUID-1397",
  "summary": "Web: Create component demos for the Fluid website.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-09-02T11:01:48.000-0400",
  "updated": "2008-10-01T09:36:52.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-871/",
      "key": "FLUID-871",
      "summary": "Web: Create a showcase of current Fluid components"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-09-02T11:02:00.000-0400",
      "body": "Iteration18\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-09-16T10:07:14.000-0400",
      "body": "Probably do not need to create demos. Instead link to the demos on the Build server.\n\nWe need a way of giving instructions on how to use the demos though. Otherwise the transition from the Fluid website to the demo site may be a bit confusing.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-09-23T15:52:04.000-0400",
      "body": "I talked to Anastasia about this and we agree that linking to the build server is not ideal because at any given moment the build could be broken or in a state not for public consumption.\n\nWe agreed that, ideally, demos should be in a different space and using the latest stable release rather than a nightly snapshot.\n\nThe best place to host this would be on the Fluid web space. We would create a new subdirectory and host the latest release JS files there and create the appropriate index pages and decorations to make the demos appropriate as an outreach tool.\n\nTime estimate:\n\n* 1/2 day to set up the web space and to have files hosted and have basic demos.\n* 3/4 day for page design, instructions\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-09-24T11:51:15.000-0400",
      "body": "Demos are now located on the Fluid website. This page (<http://fluidproject.org/index.php/demos>) references a copy of the demos extracted into a release directory.\n\nWith each new release:\n\n* archive the existing Demos page\n* extract a copy of the source code into the releases' directory.\n* update the Demos page links to reference the new sample code.\n* add any new Demos\n* add a link from the Demos page to the Demos just archived (step 1).\n\n(Added above release process to the Release Process wiki page).\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-01T09:36:52.000-0400",
      "body": "Still no instructions on how to use the demos, but it's getting better.\n"
    }
  ]
}
---
Create demos for the Fluid website.

        