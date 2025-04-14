---json
{
  "title": "FLUID-6331",
  "summary": "eslint-config-fluid should catch console log statements",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Tony Atkins [RtF]",
  "reporter": "Justin Obara",
  "date": "2018-08-29T12:43:14.621-0400",
  "updated": "2024-07-22T10:35:24.974-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-08-30T04:42:44.294-0400",
      "body": "<https://github.com/fluid-project/eslint-config-fluid/pull/6>\n"
    }
  ]
}
---
fluid-eslint-config should be setup to catch console log statements. I believe in the past this had been a feature of our linting, but it no longer appears to be in our configuration. 

<https://eslint.org/docs/rules/no-console>

 

        