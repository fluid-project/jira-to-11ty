---json
{
  "title": "FLUID-3226",
  "summary": "Update the Image Reorderer documentationI to reflect the new, selector-based approach we are recommending for all users.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Colin Clark",
  "date": "2009-10-05T15:07:34.000-0400",
  "updated": "2010-03-30T14:09:06.000-0400",
  "versions": [
    "1.1.1"
  ],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Reorderer",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-3122/",
      "key": "FLUID-3122",
      "summary": "Image Reorderer default API, sample code, and documentation still use the old-style id-based scheme for identifying and communicating orderables."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-10-07T16:45:57.000-0400",
      "body": "I've updated the API page at <http://wiki.fluidproject.org/display/fluid/Image+Reorderer+API> and I'm moving on to the tutorial.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T14:09:06.000-0400",
      "body": "The Image Reorderer documentation was sufficiently updated at 1.1.2. A tutorial might be nice sometime, but the id-based form of finding elements is now clearly deprecated throughout our existing documentation.\n"
    }
  ]
}
---
At the moment, the Image Reorderer documentation refers to the old id-based scheme for locating elements in the DOM. We should update the API and other documentation to reflect the simpler approach and bring it more in line with our Image Reorderer demo.

This should also include integrating the new afterMove callback tutorial located here:

<http://wiki.fluidproject.org/display/fluid/Talking+to+the+Server+Using+The+afterMove+Event>

        