---json
{
  "title": "FLUID-3438",
  "summary": "Javascript Unit Tests are all broken, because they are expecting the fetching of the template to be syncronous",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2009-12-17T10:34:37.000-0500",
  "updated": "2009-12-17T12:58:50.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-12-17T12:09:58.000-0500",
      "body": "Have added in a copy of jqUnit from trunk. This is a temporary measure and should be removed once the version of Infusion that the builder uses is updated.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-12-17T12:58:50.000-0500",
      "body": "Justin fixed the issue and I've reviewed it.&#x20;\n"
    }
  ]
}
---
Javascript Unit Tests are all broken, because they are expecting the fetching of the template to be syncronous

The unit tests were refactored to use the updated jqUnit in trunk, which performs the fetching of templates synchronously. However, the infusion builder is being deployed with the Infusion 1.1.2 which  still has the fetching of templates performed asynchronously.&#x20;

        