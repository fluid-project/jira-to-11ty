---json
{
  "title": "SNOW-35",
  "summary": "Confirm that breadcrumbs are working properly for Pages and sub pages",
  "tags": "SNOW",
  "project": {
    "key": "SNOW",
    "title": "Snow"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2018-07-25T16:50:04.177-0400",
  "updated": "2018-08-10T09:29:51.457-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2018-07-25T16:55:27.624-0400",
      "body": "There appears to be a problem with the breadcrumbs where the href for the trail is not properly generated.\n\nIssue 1: Not a complete Breadcrumb\n\n<https://snow-dev.idrc.ocadu.ca/the-inclusive-classroom/assistive-technology-assessments/individual-education-plans-iep-and-assistive-technology-at/>\n\nThe breadcrumb should be:\n\n3.0 Inclusive Classroom > 3.2 Assistive accessible technology in the classroom > 3.2.2 Individual Education Plans...\n\n \n\nIssue 2: The Breadcrumb URL is incorrect\n\nAppears to have HTML characters encoded.\n"
    }
  ]
}
---
Currently on the SNOW site, most of the content are Pages. Verify that the breadcrumbs are properly generating the trail for Pages and sub-Pages.

        