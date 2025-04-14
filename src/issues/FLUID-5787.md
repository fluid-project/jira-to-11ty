---json
{
  "title": "FLUID-5787",
  "summary": "Infusion's README isn't correctly parsed by npm",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2015-10-06T17:30:46.016-0400",
  "updated": "2015-10-07T09:44:39.862-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-10-07T08:55:06.747-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/infusion/pull/642>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-10-07T09:44:37.058-0400",
      "body": "The pull request is merged @ 8c33cd430943c964fb3e5e6a0b971f74bd83be4a\n"
    }
  ]
}
---
When we published Infusion to npm, we noticed that the headings aren't being parsed correctly.

<https://www.npmjs.com/package/infusion>

This is likely due to the fact that we aren't leaving spaces between our heading markup (###) and the text contents of the heading.

<https://raw.githubusercontent.com/fluid-project/infusion/master/README.md>

        