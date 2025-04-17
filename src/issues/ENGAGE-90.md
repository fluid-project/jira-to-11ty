---json
{
  "title": "ENGAGE-90",
  "summary": "XML to JSON parser doesn't work properly with array sub-structures.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2009-09-22T14:13:49.000-0400",
  "updated": "2009-11-03T11:56:48.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-22T14:26:04.000-0400",
      "body": "Bug Parade Engage 0.1\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-09-24T22:01:56.000-0400",
      "body": "Fixed at revision 8120 with manual test case, but since we do not have assertDeepEq in Java, this will have to remain \"by eye\" for now\\...\n"
    },
    {
      "author": "y z",
      "date": "2009-10-05T12:56:08.000-0400",
      "body": "Reviewed the code and tested with McCord dataset of 200 artifacts.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T11:56:48.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
The parser used to convert XML McCord data does not convert array structures properly into JSON.&#x20;

        