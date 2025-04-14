---json
{
  "title": "FLUID-3356",
  "summary": "php tests have hard coded fluid version numbers in the expected values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-11-03T15:44:46.000-0500",
  "updated": "2009-12-02T13:38:37.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3358/",
      "key": "FLUID-3358",
      "summary": "refactor php code to handle contents of build properties better"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-11-04T14:52:31.000-0500",
      "body": "I would like to follow up on <https://fluidproject.atlassian.net/browse/FLUID-3356#icft=FLUID-3356> by doing this at some point.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-11-04T14:59:20.000-0500",
      "body": "Altered PostClass: added function to retrieve the fluid version number\\\nAdded test to check this (test will fail unless manually updated with correct fluid version number on new releases).\\\nAltered tests which relied on hard coded version number to use the new function\n"
    }
  ]
}
---
The php tests have expected values which include 1.2 (the previous expected value for the fluid version number). Because we are currently using fluid 1.1.2, the tests break. We need to remove the reliance on a hard coded version number and move to a dynamically obtained value.

        