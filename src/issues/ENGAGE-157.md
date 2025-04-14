---json
{
  "title": "ENGAGE-157",
  "summary": "Add the ability to reorder artifacts within My Collection",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2009-10-21T13:23:03.000-0400",
  "updated": "2017-12-22T09:44:34.326-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:34.325-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
After we've got a working version of My Collection with both grid and list views, we'll need to add the ability to reorder artifacts within the collection. The Reorderer component has all of the functionality to do this, but it's driven by mouse-based events (click and drag). We'll need to adapt the Reorderer to the touch events provided by WebKit-based mobile browsers.

The code for the Reorderer is part of Infusion and is available here:

<http://source.fluidproject.org/svn/fluid/infusion/trunk/src/webapp/components/reorderer/js/Reorderer.js>

Since Reorderer actually still depends on jQuery UI's draggable API, we'll probably need to work on a patch at that level, or replace our use of draggable with our own code.

        