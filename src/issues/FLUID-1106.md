---json
{
  "title": "FLUID-1106",
  "summary": "Improve jqUnit testing framework with \"deep equivalence\" operator",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2008-08-06T11:01:59.000-0400",
  "updated": "2011-02-22T16:27:49.961-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-08-06T11:48:11.000-0400",
      "body": "Committed to jqUnit at 5323\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:49.959-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
In testing complex conditions, often it is better to express a testing assertion as wholesale equivalence of one complex Javascript structure with another, rather than to make a whole host of individual assertions. This improves readability and compactness of the tests, and is likely to lead to more thorough testing coverage.

        