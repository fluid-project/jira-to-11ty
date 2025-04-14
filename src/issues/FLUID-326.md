---json
{
  "title": "FLUID-326",
  "summary": "Move Lightbox-specific code out of Fluid.js and into Lightbox.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2008-03-10T13:40:17.000-0400",
  "updated": "2008-08-09T14:27:57.000-0400",
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
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-326/FLUID-326.patch",
      "filename": "FLUID-326.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-03-10T13:43:30.000-0400",
      "body": "Here's a patch that moves Lightbox-specific code out of Fluid.js and into Lightbox.js. It's also a significant refactoring, splitting up initLightbox() into three separate methods to make it more maintainable and reusable.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-03-10T13:44:17.000-0400",
      "body": "Michelle, can you review this patch and apply it if you think it's good, or offer comments if not?\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-11T13:18:21.000-0400",
      "body": "This patch looks good. I needed to make a few tiny tweaks to it such as modifying the generic lightbox template's init script.  I will also need to commit a patch to the gallery as well because of the new namespace. (fluid.lightbox rather than fluid)\n"
    }
  ]
}
---
Lightbox-specific code such as initLightbox() should be moved into Lightbox.js. We should reserve Fluid.js for reusable functionality required by most Fluid components.

        