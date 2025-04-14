---json
{
  "title": "FLUID-2272",
  "summary": "Release 0.8: Missing Fluid dependency for InlineEditIntegrations.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-02-19T17:40:48.000-0500",
  "updated": "2011-02-22T16:27:57.116-0500",
  "versions": [
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2236/",
      "key": "FLUID-2236"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-02-19T17:50:41.000-0500",
      "body": "I reviewed Eli's commit to build.properties during code freeze and it was correct. This change is required to produce a working Fluid-all.js, but needn't trigger a whole new QA process.\n\n+1.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-02-19T18:10:15.000-0500",
      "body": "Added the missing file dependency\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:57.114-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The InlineEditIntegrations.js was not listed in the Fluid dependencies section of build.properties

        