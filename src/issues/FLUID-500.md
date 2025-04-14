---json
{
  "title": "FLUID-500",
  "summary": "File Upload: Re-factor for multi-instance",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-04-15T12:53:04.000-0400",
  "updated": "2011-02-22T16:27:53.842-0500",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-818/",
      "key": "FLUID-818"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-06-24T20:27:20.000-0400",
      "body": "Tested the uploader using the new multi-instance uploader manual test. Seemed to work just fine (after fixing a progress bug). So I'm closing this bug.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:53.837-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Fluid Uploader code currently assumes that there is only one uploader at a time on the page. Although there are probably few use cases where there would be more than one uploader on a page, it should/must be supported.&#x20;

        