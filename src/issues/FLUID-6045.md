---json
{
  "title": "FLUID-6045",
  "summary": "The table header scrolls out of view as the file queue is scrolled",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-08T12:27:12.142-0500",
  "updated": "2017-01-16T09:36:36.564-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6028/",
      "key": "FLUID-6028",
      "summary": "File queue table header and content are in separate tables"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4061/",
      "key": "FLUID-4061",
      "summary": "Scrolling while uploading"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6108/",
      "key": "FLUID-6108"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-08T12:30:17.757-0500",
      "body": "This issue was collateral damage from addressing <https://fluidproject.atlassian.net/browse/FLUID-6028#icft=FLUID-6028>, to combine all of the uploader parts into a single table. This was seen as a better alternative than breaking the accessibility by having the headers separated semantically from the content. At the moment, due to how the scrollTo plugin and progress overlays work, it does not seem possible to find an alternative that doesn't involve a redesign of the uploader component.\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the [Uploader demo](http://build.fluidproject.org/infusion/demos/uploader/)\
2\. Add several files to the file queue, so that the scroll bar appears.

Notice that as you scroll to the bottom of the file queue, the table headers scroll out of view.

        