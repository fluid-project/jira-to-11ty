---json
{
  "title": "FLUID-3423",
  "summary": "Builder won't load in IE ",
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
  "reporter": "Alison Benjamin",
  "date": "2009-12-10T13:51:36.000-0500",
  "updated": "2009-12-10T20:45:55.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": "XP&#x20;\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-10T14:00:50.000-0500",
      "body": "Bug Parade Builder 1.1.2  - after consultation with Michelle and Anastasia we added this bug to the bug parade. It was a side effect of forgetting to use jsLint after completing <https://fluidproject.atlassian.net/browse/FLUID-3419#icft=FLUID-3419>\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-10T14:05:52.000-0500",
      "body": "There was a trailing comma in the renderer selectors array - jsLint would have caught it.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-10T20:45:55.000-0500",
      "body": "I reviewed Laurel's fix for this issue and it is correct.\n"
    }
  ]
}
---
<http://forge.fluidproject.org/infusionBuilder/html/InfusionBuilder.html>

        