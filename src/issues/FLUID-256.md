---json
{
  "title": "FLUID-256",
  "summary": "Focus thumbnail container instead of focus-target in Lightbox",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-02-19T12:50:05.000-0500",
  "updated": "2008-04-28T15:29:06.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-145/",
      "key": "FLUID-145"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-02-27T13:17:22.000-0500",
      "body": "This functionality is now in place. Everything works as expected in FF2 and FF3 on Mac, FF2 and IE on Windows. Tests pass in FF2 on Mac and Windows, can't be run in FF3 on Mac, and fail in IE, likely because jsUnit doesn't like you putting focus on things that aren't visible. Next step is to switch to jqUnit to address this issue.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-12T14:51:51.000-0400",
      "body": "The tests have been ported over to jqUnit, and run successfully in all browsers.\\\nThere is still some refactoring needed around the various constants files and setup files, but that will happen ongoing.\n"
    }
  ]
}
---
Currently, the Lightbox places focus on the element within a thumbnail that has an 'orderable-focus-target' class. We need to place focus onthe thumbnail container itself, and remove any code that supports focussing children.

        