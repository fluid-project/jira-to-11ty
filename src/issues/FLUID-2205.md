---json
{
  "title": "FLUID-2205",
  "summary": "Reorderering not working for the simple-grid and simple-portlets manual test pages",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-02-06T11:01:23.000-0500",
  "updated": "2009-02-06T11:37:33.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-06T11:31:18.000-0500",
      "body": "Updated the paths to the js and css files as needed ( at r6439)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-06T11:37:32.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Reorderering not working for the simple-grid and simple-portlets manual test pages

<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/reorderer/simple-grid/grid.html>\
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/reorderer/portal/simple-portlets.html>

at r6362 some restructuring of the manual test pages occured. \
some of the script links may not have been updated

        