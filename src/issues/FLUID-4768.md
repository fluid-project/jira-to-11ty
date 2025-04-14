---json
{
  "title": "FLUID-4768",
  "summary": "ImageReorder - Ctrl + Arrow keys are used by OS hence component cannot be controlled through those key combinations",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Alexey Novak",
  "date": "2012-08-15T15:42:43.778-0400",
  "updated": "2014-06-03T10:35:40.031-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Image Reorderer"
  ],
  "environment": "(Safari - unknown - older test done in 2012)\\\nMac OS 10.8.5 Firefox 29.0.1, Chrome 35.0.1916.114, Safari 6.1 (8537.71)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "beth.mejsullivan",
      "date": "2014-05-30T16:21:51.834-0400",
      "body": "Doing the Boundary Tests of <http://wiki.fluidproject.org/display/fluid/Reorderer+QA+Test+Plan+-+Image+Reorderer>\n\nTest 3 : for mac users the instruction to use the control + command key and arrow keys are missing, using control + \"i\",\"j\",\"k'.\"m\" works fine\n"
    }
  ]
}
---
Safari:

Go to <http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/html/imageReorderer.html>\
Select image and try to use Ctrl + Arrow key combinations. You will see that OS has a priority for those key combinations and therefore the component cannot be controlled through those key shortcuts.

Firefox 29.0.1 &  Chrome 35.0.1916.114

Instructions need to be specified for Mac OS to use the Command+Control+Arrow keys to move the avatars.

        