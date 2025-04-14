---json
{
  "title": "FLOE-418",
  "summary": "Accessibility features",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2015-09-14T11:29:22.687-0400",
  "updated": "2015-10-20T11:00:15.300-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-403/",
      "key": "FLOE-403"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2015-09-28T10:43:41.390-0400",
      "body": "Long term, now that ATAG 2.0 is published by W3C, we should assess the accessibility of the authoring tool components in light of that document: <http://www.w3.org/TR/ATAG20/>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2015-10-14T15:34:42.433-0400",
      "body": "From consultation with @@Joseph Scheuhammer by myself & @@Cindy Li, we've got the following enhancements to accessibility:\n\n* aria-live attribute for the numeric total in the data entry form, along with aria-controls association (will implement this for the pull request)\n\n- role=presentation for the color fields in the legend table (will implement for PR)\n\n* semantic association between the legend and the corresponding pieces of the pie chart using aria-labelledby (will hold off on this one until role=figure is available - at the moment, we use role=img, which doesn't expose the individual slices)\n\nLonger term, we'll want to look at what's going to be available in the Graphics modules:\n\n* <https://rawgit.com/w3c/aria/master/aria/graphics.html>\n* <https://rawgit.com/w3c/aria/master/aria/graphics2.html>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-10-20T11:00:11.277-0400",
      "body": "Merged the pull request <https://github.com/fluid-project/chartAuthoring/pull/8> into the master @ 38330d87884f761a25009e4be01019b8bf57c889\n"
    }
  ]
}
---
Make sure the pie chart components / demo have good basic accessibility coverage. Specifically:

* keyboard access
* good screenreader behaviour

A part of this will be some research into accessible SVG behaviour & accessible infographic behaviour in general.

        