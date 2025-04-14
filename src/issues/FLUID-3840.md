---json
{
  "title": "FLUID-3840",
  "summary": "Infusion Builder - redesign or improve the UI",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2010-11-16T10:02:40.326-0500",
  "updated": "2014-03-03T11:20:13.941-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3840/Builder-01.png",
      "filename": "Builder-01.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3840/Builder-02.png",
      "filename": "Builder-02.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3840/Builder-03.png",
      "filename": "Builder-03.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3840/Builder-04.png",
      "filename": "Builder-04.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3840/Builder-05.png",
      "filename": "Builder-05.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3840/Builder-06.png",
      "filename": "Builder-06.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3840/Builder-rev2-08.png",
      "filename": "Builder-rev2-08.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3840/Builder-rev2-09.png",
      "filename": "Builder-rev2-09.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3840/Builder-rev2-10.png",
      "filename": "Builder-rev2-10.png"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-11-16T10:11:37.800-0500",
      "body": "Wireframe with major interactions. Styling to be worked on.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-21T13:39:04.534-0500",
      "body": "Added new wireframes.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:13.940-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
Analyze the current builder design and improve upon it.

Interactions to consider:

* What happens to selections if a package is chosen?
* How do we handle dependencies?

Attachments:

Builder-rev2-01 - the initial state of the builder after the user loads the page.\
Builder-rev2-02 - user selects Infusion Framework Core.\
Builder-rev2-03 - user selects a few components: Inline Edit\
Builder-rev2-04 - user selects a few components: Reorderer and Progress\
Builder-rev2-05 - user de-selects Infusion Framework Core (may be intentional, or may be a mistake), jQuery, and jQuery UI\
Builder-rev2-06 - Download Minified Package is pressed.

Builder-rev2-08 - Examples of hover styling.\
Builder-rev2-09 - Keyboard navigation\
Builder-rev2-10 - Keyboard navigation across asymmetrical lists

        