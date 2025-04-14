---json
{
  "title": "ENGAGE-181",
  "summary": "Investigate using a custom build of infusion for engage",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-11-03T16:19:39.000-0500",
  "updated": "2010-03-09T15:09:31.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-05T14:25:11.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-03-09T15:00:27.000-0500",
      "body": "Currently we do a full build of Infusion for inclusion in engage but we link against a smaller MyInfusion.js file that contains all the infusion javascript resources that engage uses.&#x20;\n"
    }
  ]
}
---
Investigate using a custom build of infusion for engage

We probably need benchmarks to show if linking against a single js file is faster and what it would take to have custom builds generated on the fly for each page.

        