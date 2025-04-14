---json
{
  "title": "VULAB-90",
  "summary": "Survey Results and Video Links",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-11-13T11:38:59.000-0500",
  "updated": "2014-03-04T08:28:23.921-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Blake E",
      "date": "2008-11-13T18:54:45.000-0500",
      "body": "Ok, its sort of a stopgap fix so we can have a successful all-hands but I managed to get it working in a reasonable order.\n\nBasically, you view a project (and if its active or complete) you go to ?where=view\\\nthere you will be able to see totals and browse responses for both presurvey and the postsurvey.\n\nThe post-survey contains the videos as well.\n\nI am going to make post-surveys required now, as that is where I store the video ids for the capture.\n"
    }
  ]
}
---
This whole section is mostly under phpESP control, but I did code in some stopgaps which I barely understand now. So I'll be taking a look and trying to streamline it the process.

        