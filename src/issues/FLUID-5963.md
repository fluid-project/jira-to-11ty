---json
{
  "title": "FLUID-5963",
  "summary": "Factor ESLint definitions into reusable npm module",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2016-09-19T19:58:48.529-0400",
  "updated": "2019-07-12T09:16:07.179-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "npm module"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-09-22T14:41:05.276-0400",
      "body": "Need to update the eslint settings with changes from this PR <https://github.com/GPII/universal/pull/463>\n"
    }
  ]
}
---
Our move to ESLint with FLUID-5909 has been popular and successful. These linting rules are being shared across numerous modules across our projects, including kettle, the GPII core architecture and all the related gpii-xxxx projects. It would be helpful if we could centralise these rules in a shared repository - especially as with work like the review of <https://github.com/GPII/universal/pull/463> we occasionally come up with the extra rule or tweak that it would be convenient to share rapidly.

Usefully enough, eslint supports exactly such a facility, explained in <http://eslint.org/docs/developer-guide/shareable-configs> - we should set up a small npm module, advisedly named "eslint-config-fluid" containing our .eslintrc file and reference it in the described way.

        