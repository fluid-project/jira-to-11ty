---json
{
  "title": "FLUID-6047",
  "summary": "After adding files to the queue a new input for \"Add More\" is inserted into the DOM",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-08T13:20:36.481-0500",
  "updated": "2016-11-08T13:21:33.819-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6047/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-08T13:21:33.819-0500",
      "body": "screenshot.png shows the multiple \"Add More\" buttons in the DOM\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the [Uploader demo](http://build.fluidproject.org/infusion/demos/uploader/)\
2\. Add some files to the queue\
3\. Add some more files to the queue\
4\. Inspect the "Add More" button with browsers developer tools and notice that there are multiple elements for the "Add More" button.

        