---json
{
  "title": "FLUID-60",
  "summary": "Reorganize contents of \"/utoronto/fluid\" moving to two root directories \"fluid\" and \"sandbox\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-10-17T15:10:12.000-0400",
  "updated": "2007-10-17T17:08:38.000-0400",
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
      "author": "Joseph Scheuhammer",
      "date": "2007-10-17T16:33:03.000-0400",
      "body": "As of Wed Oct 17, 2007 the new structure is in place.  It remains to check out the source and build the various projects in order to see if the new structure is an intact copy of the original structure.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-10-17T17:08:27.000-0400",
      "body": "Checked out /fluid/components from <https://source.fluidproject.org/svn> to Mangosteen, built and deployed the fluid-components, and then built and deployed the gallery tool (sakai) based thereon.  Ran the lightbox, the gallery tool, and the reorderer unit tests.  All worked as expected.\n"
    }
  ]
}
---
Currently the structure of the fluid repository coming out of sakai's contrib is:

/utoronto\
/fluid\
/components\
/gallery-portlet\
/infrastructure\
/sandbox

It should be:

/fluid\
/components\
/gallery-portlet\
/infrastructure

/sandbox

        