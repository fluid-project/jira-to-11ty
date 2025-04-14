---json
{
  "title": "FLUID-6006",
  "summary": "Minor issue of the initial page index where when opened starts on page 4 of the list.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "David",
  "date": "2016-10-27T15:47:19.900-0400",
  "updated": "2016-10-28T08:37:42.623-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Design Framework"
  ],
  "environment": "IE11, Windows 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-10-28T08:37:42.620-0400",
      "body": "This is the expected behaviour for this example. It is to demonstrate that the page component can be configured to start at various pages.\n"
    }
  ]
}
---
The "Initial page index" page of the school roster list(<http://build.fluidproject.org/infusion/examples/components/pager/initialPageIndex/>)  starts on page 4 of the list rather than page 1.

        