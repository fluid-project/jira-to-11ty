---json
{
  "title": "FLUID-2446",
  "summary": "Styling issues with Renderer-component-types manual test",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-04-01T12:37:21.000-0400",
  "updated": "2016-12-20T07:36:15.421-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5217/",
      "key": "FLUID-5217",
      "summary": "Move 'demos' and 'tests' folders (etc?) to be sibling of 'src' instead of child"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2446/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-01T12:38:00.000-0400",
      "body": "'screenshot-1' shows the overlap of the images and the selection section\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T19:28:40.000-0400",
      "body": "This seems like a good candidate for review when we start to do some demo improvements/tweaks for 1.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-09T09:51:07.595-0400",
      "body": "This is being fixed with the changes to <https://fluidproject.atlassian.net/browse/FLUID-5217#icft=FLUID-5217>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-12-20T07:36:15.419-0500",
      "body": "This manual test was removed.\n"
    }
  ]
}
---
Styling issues with Renderer-compoenent-types manual test

Steps to reproduce

1\) Open the Renderer Component Types example\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/renderer-component-types.html>

Notice that the images are overlapping with the selection section

        