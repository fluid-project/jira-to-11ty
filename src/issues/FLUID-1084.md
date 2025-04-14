---json
{
  "title": "FLUID-1084",
  "summary": "Create useful \"markup springboards:\" working example markup for each component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Colin Clark",
  "date": "2008-07-31T18:10:32.000-0400",
  "updated": "2014-03-03T12:02:05.741-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos",
    "Image Reorderer",
    "Layout Reorderer",
    "Pager",
    "Reorderer",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1084/FLUID-1084.patch",
      "filename": "FLUID-1084.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-07-31T18:10:40.000-0400",
      "body": "infusion-05-wishlist\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-08-19T16:20:22.000-0400",
      "body": "Patch for global CSS changes, local CSS changes, and adding the Reorderer examples\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-02T12:18:33.000-0400",
      "body": "All the subtasks are now completed.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-04T12:47:10.000-0400",
      "body": "Uploader and Pager are still to be done.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-10-21T23:21:03.000-0400",
      "body": "I've promoted the Uploader and Pager springboard work to their own separate issues. This one is done!\n"
    }
  ]
}
---
At the moment, we have a variety of sample markup scattered through our source code repository. Some are intended to show a real-world context for our components (such as the uPortal version of the LayoutCustomizer), while others are fairly contrived developer-driven examples. All of these examples tend to be hard to find.

We need to create a great set of fully working, sample markup that developers can use to start working with our components. This markup would be designed to be cut-and-pasted into someone's application and sculpted to work with their particular context. The idea here is to provide good, fully semantic, simple markup that shows our components at their best, saving a casual implementer the work of figuring out what styles to use, how to structure the markup, and so on.&#x20;

        