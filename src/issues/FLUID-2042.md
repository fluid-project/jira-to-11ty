---json
{
  "title": "FLUID-2042",
  "summary": "Build a Fluid component, inspired by MooTool's Swiff, that is responsible for rendering Flash movies and serving as a Flash/JavaScript bridge.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-12-21T15:34:19.000-0500",
  "updated": "2014-05-22T14:27:26.201-0400",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2042/FLUID-2042-Sketch.patch",
      "filename": "FLUID-2042-Sketch.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2042/FLUID-2042-Sketch-2.patch",
      "filename": "FLUID-2042-Sketch-2.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-12-21T15:37:12.000-0500",
      "body": "Here's a very sketchy implementation of a fluid.flashBridge component. It is inspired by Swiff, but contains none of its code.\n\nThis hasn't been tested or even run yet. It's just a sketch that I didn't want to accidentally lose.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-12-21T17:41:35.000-0500",
      "body": "Here's a second version of the sketch with quite a number of unit tests. We're getting somewhere.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:27:26.169-0400",
      "body": "Due to a cross site scripting vulnerability we have removed flash support from the uploader. See <https://fluidproject.atlassian.net/browse/FLUID-5354#icft=FLUID-5354>\n"
    }
  ]
}
---
MooTool's Swiff  is a nice example of a self-contained library intended to handle the mechanics of JavaScript-Flash communication. Unfortunately, it is dependent on MooTools and as a result possesses a number of undesirable tendencies. We should build a Fluid component that is similarly responsible for Flash/JavaScript rendering and communication, but provides greater customization and portal-friendliness.

        