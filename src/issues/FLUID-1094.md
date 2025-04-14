---json
{
  "title": "FLUID-1094",
  "summary": "Reorderer sluggish in FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2008-08-05T12:57:33.000-0400",
  "updated": "2008-08-11T08:39:05.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-08-08T14:14:40.000-0400",
      "body": "Considerable performance improvements as of revision 5338 - disabled \"refreshPositions\" and took a lot of DOM traversing code out of the mouse move loop. We are now using only roughly as much CPU per tick as the framework DnD code, as seen by the profiler - it feels very much snappier.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-11T08:39:05.000-0400",
      "body": "Verified fix using FF2 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
The reorderer feels sluggish in FF2, using the mouse. To have an understanding of the issue, open up a FF3 beside it and notice the performance difference.

It is most notable in the Lightbox and Layout Customizer examples:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/generic-lightbox/generic-lightbox.html>\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

It may have something to do with the creation of the drop targets and or avatar.

        