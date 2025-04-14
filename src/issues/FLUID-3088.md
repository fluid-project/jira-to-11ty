---json
{
  "title": "FLUID-3088",
  "summary": "Reorderer focus problem with Opera using keyboard navigation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Armin Krauss",
  "date": "2009-08-11T11:05:47.000-0400",
  "updated": "2014-07-07T15:38:18.063-0400",
  "versions": [
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility",
    "Layout Reorderer"
  ],
  "environment": "Opera 9.63 (Mac OS X 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3088/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-09T09:15:39.000-0500",
      "body": "I think the issue is that the contents of the portlet all have focus styling as well.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-11T09:11:53.052-0500",
      "body": "Screenshot.png shows part of the large focus highlight and that all the elements within the image lightbox portlet have focus styling\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-07T15:38:18.057-0400",
      "body": "Opera is no longer a supported browser.\n"
    }
  ]
}
---
During "Test 7: keyboard, move portlet" test for the Layout Reorderer <http://wiki.fluidproject.org/display/fluid/Reorderer+QA+Test+Plan+-+Layout+Reorderer>\
using Opera 9.63, one of the portlets showed a focus problem. When navigating with the keyboard to \
the portlet "Image Lightbox" on <http://build.fluidproject.org/infusion/integration-demos/uportal/html/portal.html> the frame that shows\
the focus is to big and not only around the box itself.

        