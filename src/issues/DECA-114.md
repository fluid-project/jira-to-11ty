---json
{
  "title": "DECA-114",
  "summary": "Implement a navigation bar",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-06-09T11:05:30.309-0400",
  "updated": "2012-05-25T15:52:42.736-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-06-14T15:50:55.117-0400",
      "body": "If there is enough time, add a breadcrumb navigation for 0.4/0.5.\\\nIf there isn't enough time, at minimum there should be a link or button on the Export screen to redirect user back to Capture.\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-07-14T10:26:04.077-0400",
      "body": "As of 0.4, it's hard coded into the markup/styling. This might be better if it's dynamically generated.\n\nConsiderations:\n\n* Need to highlight the current location on the breadcrumb\n* Need to list out path from current page down to root (home/book management)\n"
    }
  ]
}
---
The Decapod wireframes indicate that there will be a navigation bar on most if not all pages.

<http://wiki.fluidproject.org/display/fluid/Decapod+1.0+Wireframes>

        