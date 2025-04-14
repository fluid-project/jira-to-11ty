---json
{
  "title": "FLUID-5370",
  "summary": "Clean up backwards compatibility code for status messages",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2014-05-14T15:42:43.389-0400",
  "updated": "2016-09-15T08:53:52.945-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5957/",
      "key": "FLUID-5957"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-09-15T08:53:47.620-0400",
      "body": "This was discussed at the Community Meeting on Sept 14, 2016. It was determined that the old values were still useful to integrators and that all relevant information that could be tokenized and used within a string template should be modelled and passed into the string template function. This has been captured in <https://fluidproject.atlassian.net/browse/FLUID-5957#icft=FLUID-5957>(<https://issues.fluidproject.org/browse/FLUID-5957>)\n"
    }
  ]
}
---
For the 1.5 release we updated the status messages in Uploader but preserved the old tokens so that the strings could be backwards compatible with prior versions of the uploader. For the 2.0 release we should refactor all of this code to remove the old token values and just have the new ones.&#x20;

        