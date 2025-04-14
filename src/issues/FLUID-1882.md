---json
{
  "title": "FLUID-1882",
  "summary": "Design:  Define error handling for simple text inline edit [shared DO, EC]",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Allison Bloodworth",
  "reporter": "Daphne Ogle",
  "date": "2008-12-01T18:36:18.000-0500",
  "updated": "2009-01-23T12:16:03.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-12-03T15:01:32.000-0500",
      "body": "iteration24\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2009-01-23T12:15:45.000-0500",
      "body": "We believe error handling may be a separate component, so we are not planning to work on this now.&#x20;\n"
    }
  ]
}
---
There are two kinds of error handling as I see it. The first is just if something happens wrong with the component or with saving back to the server. The other is "validation", the component behaved well but the data did not conform to the values expected by the application. I don't know if we want to handle the latter.

Dev & design should collaborate on what errors we want to handle and how.

        