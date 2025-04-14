---json
{
  "title": "FLUID-2534",
  "summary": "Verify dependencies for Renderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Michelle D'Souza",
  "date": "2009-04-06T11:23:30.000-0400",
  "updated": "2009-11-13T09:00:22.000-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Infrastructure",
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-04-06T11:29:43.000-0400",
      "body": "Please also check the dependencies for fastXmlPull in the lib folder.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-04-07T15:27:19.000-0400",
      "body": "I have verified that the custom Renderer build includes the correct dependencies - all the test cases can pass (except those which independently make use of JSON.js or Pager.js). fastXmlPull.js actually has no further dependencies.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T09:00:22.000-0500",
      "body": "Closed as per previous comment.&#x20;\n"
    }
  ]
}
---

        