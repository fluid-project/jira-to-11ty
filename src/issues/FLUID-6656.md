---json
{
  "title": "FLUID-6656",
  "summary": "Adding a file with a long file name, with other files in the queue will clip the delete buttons on the right side",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-06T16:32:07.631-0400",
  "updated": "2021-07-06T16:32:44.861-0400",
  "versions": [
    "3.0"
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6656/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-07-06T16:32:44.861-0400",
      "body": "screenshot.png shows the delete buttons completely hidden from view.\n"
    }
  ]
}
---
Steps to reproduce:

1. Open the [Uploader demo](https://build-infusion.fluidproject.org/demos/uploader/)
2. Add some files to the queue, including one with a long file name that doesn't fit on a single row.
3. Notice that the delete button is pushed off the right side and clipped. If the scroll bar is present it may even be completely hidden.

        